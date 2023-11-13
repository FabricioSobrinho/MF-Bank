// import hooks
import { useState, useEffect } from "react";
import { validateToken } from "../hooks/ValidateToken";
import { ValidatePassword } from "../hooks/ValidatePassword";
import { useUser } from "../hooks/UserProvider";
import { GetBalance } from "../hooks/GetBalance";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../hooks/LoggedProvider";

// import styles
import styles from "../Styles/DepositPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import Errors from "../Layouts/Components/Errors";
import Loader from "../Layouts/Components/Loader";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function DepositPage() {
  const { user, setUserData, setBalance } = useUser();
  const [password, setPassword] = useState();

  const [errors, setErrors] = useState([]);

  const [depositAmount, setDepositAmount] = useState({
    deposit_amount: 0,
  });

  const [depositFavoredAccount, setDepositFavoreAccount] = useState({
    deposit_favored_account: 0,
  });

  const [isClientFavored, setIsClientFavored] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { logout } = useLoggedIn();

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const depositAction = async () => {
    if (depositAmount.deposit_amount > 0) {
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

            const depositFavoredAccountNumber = isClientFavored
              ? null
              : depositFavoredAccount.deposit_favored_account;

            const depositData = {
              deposit_amount: depositAmount.deposit_amount,
              deposit_favored_account: depositFavoredAccountNumber,
            };

            const response = await axios.post(
              "http://localhost:3000/deposit",
              depositData,
              config
            );

            navigate("/view-account", {
              state: { message: "Depósito efetuado com sucesso" },
            });
          } catch (error) {
            setErrors([[error.response.data.error]]);
          }
        } else {
          setErrors([["Senha inválida"]]);
        }
      } catch (error) {
        setErrors([[error]]);
      }
    } else {
      setErrors([["Insira um montante válido para o depósito"]]);
    }
  };

  const handleDepositAmount = (e) => {
    const convertedValue = Number(e.target.value);
    setDepositAmount({
      deposit_amount: convertedValue,
    });
  };

  const handleIsClientFavored = () => {
    setIsClientFavored(!isClientFavored);
  };

  const handlePassword = async (e) => {
    setPassword(e.target.value);
  };

  const handleFavoredAccountNumber = (e) => {
    const favoredAccountNumber = Number(e.target.value);
    setDepositFavoreAccount({
      deposit_favored_account: favoredAccountNumber,
    });
  };

  const toFixedValue = (value) => {
    return parseFloat(value).toFixed(2);
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData, logout);
      if (accessToken) {
        await GetBalance(accessToken, client, uid, setBalance);
        setIsLoading(false);
      } else {
        setIsLoading(true);
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.MainDepositPage}>
          <div className={styles.leftDepositScreen}>
            <div className={styles.topLeftDepositScreen}>
              {errors.length > 0 && <Errors errors={errors} />}
              <label htmlFor="depositMontant">
                Insira a quantia que deseja depositar:
              </label>
              <InputInsertData
                text="Quantia do deposito"
                heightInput={4.5}
                widthInput={29}
                name="depositMontant"
                type="number"
                handleChange={handleDepositAmount}
                required
              />
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id="favSelector"
                  onChange={handleIsClientFavored}
                />
                <label htmlFor="favSelector">Favorecido é você mesmo?</label>
              </div>
              {!isClientFavored && (
                <>
                  <label htmlFor="favoredAccountNumber">
                    Insira o número da conta do favorecido:
                  </label>
                  <InputInsertData
                    text="Numero da conta"
                    heightInput={4.5}
                    widthInput={29}
                    name="favoredAccountNumber"
                    maskChar={""}
                    mask={"99999999"}
                    handleChange={handleFavoredAccountNumber}
                    required
                  />
                </>
              )}
              <hr />
            </div>
            <div className={styles.bottomLeftDepositScreen}>
              <label htmlFor="depositPass">Insira a sua senha: </label>
              <InputInsertData
                text="Senha"
                heightInput={4.5}
                widthInput={29}
                type="password"
                name="depositPass"
                handleChange={handlePassword}
                required
              />
              <InputButton
                text="Confirmar"
                heightButton={5}
                widthButton={15}
                handleClick={depositAction}
              />
            </div>
          </div>
          <div className={styles.rightDepositScreen}>
            <div className={styles.newBalanceView}>
              <p>
                Saldo atual: {toFixedValue(user.balance)}
                <br />
                Novo saldo:{" "}
                {isClientFavored
                  ? toFixedValue(user.balance + depositAmount.deposit_amount)
                  : toFixedValue(user.balance)}
              </p>
            </div>
            <InputButton
              text="Cancelar operação"
              heightButton={5.125}
              widthButton={29}
              route={"/view-account"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default DepositPage;
