// import hooks
import { useEffect, useState } from "react";
import { validateToken } from "../hooks/ValidateToken";
import { ValidatePassword } from "../hooks/ValidatePassword";
import { useNavigate } from "react-router-dom";
import { GetBalance } from "../hooks/GetBalance";
import { useUser } from "../hooks/UserProvider";

// import styles
import styles from "../Styles/TransferPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import Errors from "../Layouts/Components/Errors";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function TransferPage() {
  const { user, setUserData, setBalance } = useUser();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [transferAmount, setTransferAmount] = useState({
    transfer_amount: 0,
  });
  const [favoredAccount, setFavoredAccount] = useState({
    favored_account_number: 0,
  });

  const [errors, setErrors] = useState([]);

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const transferAction = async () => {
    if (transferAmount.transfer_amount > 0) {
      try {
        const isValidPass = await ValidatePassword(
          accessToken,
          client,
          uid,
          password
        );

        if (isValidPass) {
          try {
            const config = {
              headers: {
                "access-token": accessToken,
                client: client,
                uid: uid,
              },
            };

            const transferData = {
              transfer_amount: transferAmount.transfer_amount,
              favored_account_number: favoredAccount.favored_account_number,
            };

            const response = await axios.post(
              "http://localhost:3000/transfer",
              transferData,
              config
            );

            navigate("/view-account", {
              state: { message: "Transferência efetuada com sucesso" },
            });
          } catch (error) {
            setErrors([[error.response.data.error]]);
          }
        } else {
          setErrors([["Senha inválida"]]);
        }
      } catch (error) {
        setErrors([["Houve um erro ao validar sua senha"]]);
      }
    } else {
      setErrors([["Insira um montante válido, por favor"]]);
    }
  };

  const handleTransferAmount = (e) => {
    const convertedValue = Number(e.target.value);

    setTransferAmount({
      transfer_amount: convertedValue,
    });
  };

  const handleFavoredAccount = (e) => {
    const convertedAccountNumber = e.target.value;

    setFavoredAccount({
      favored_account_number: convertedAccountNumber,
    });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const toFixedValue = (value) => {
    return parseFloat(value).toFixed(2);
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData);
      if (accessToken) {
        await GetBalance(accessToken, client, uid, setBalance);
      } else {
      }
    } catch (error) {
      console.log("Houve um erro de validação: " + error);
    }
  };

  useEffect(() => {
    if (accessToken && client) {
      validateTokenAuth();
    }
  }, []);

  return (
    <div className={styles.MainTransferPage}>
      <div className={styles.leftTransferScreen}>
        <div className={styles.topLeftTransferScreen}>
          {errors.length > 0 && <Errors errors={errors} />}

          <label htmlFor="transferOriginAcc">
            Insira a quantia que deseja transferir:{" "}
          </label>
          <InputInsertData
            text="Quantia da transferêcia"
            heightInput={4.5}
            widthInput={29}
            type={"number"}
            name="transferOriginAcc"
            handleChange={handleTransferAmount}
            required
          />
          {transferAmount.transfer_amount > user.balance ? (
            <div className={styles.notEnoughBalance}>Saldo insuficiente</div>
          ) : transferAmount.transfer_amount < 0 ? (
            <div className={styles.notEnoughBalance}>Saldo inválido</div>
          ) : (
            <div className={styles.EnoughBalance}>Saldo suficiente</div>
          )}
          <label htmlFor="favTransferNumber">
            Insira o número da conta do favorecido:{" "}
          </label>
          <InputInsertData
            text="Número da conta favorecida"
            heightInput={4.5}
            widthInput={29}
            name="favTransferNumber"
            mask={"99999999"}
            maskChar={" "}
            handleChange={handleFavoredAccount}
            required
          />
          <hr />
        </div>
        <div className={styles.bottomLeftTransferScreen}>
          <label htmlFor="transferPass">Insira a sua senha: </label>
          <InputInsertData
            text="Senha"
            heightInput={4.5}
            widthInput={29}
            type="password"
            name="transferPass"
            handleChange={handlePassword}
            required
          />

          <InputButton
            text="Confirmar"
            heightButton={5}
            widthButton={15}
            handleClick={transferAction}
          />
        </div>
      </div>
      <div className={styles.rightTransferScreen}>
        <div className={styles.newBalanceView}>
          <p>
            Saldo atual: {toFixedValue(user.balance)}
            <br />
            Novo saldo: {toFixedValue(user.balance - transferAmount.transfer_amount)}
          </p>
        </div>
        <InputButton
          text="Cancelar operação"
          heightButton={5.125}
          widthButton={29}
        />
      </div>
    </div>
  );
}

export default TransferPage;
