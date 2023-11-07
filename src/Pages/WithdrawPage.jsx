// import hooks
import { useUser } from "../hooks/UserProvider";
import { validateToken } from "../hooks/ValidateToken";
import { GetBalance } from "../hooks/GetBalance";
import { ValidatePassword } from "../hooks/ValidatePassword";

// import styles
import styles from "../Styles/WithdrawPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";

// import dependencies
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WithdrawPage() {
  const { user, setUserData, setBalance } = useUser();

  const [withdrawMontant, setWIthdrawMontant] = useState({
    withdrawal_amount: 0
  });

  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const withdrawAction = async () => {
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
          const response = await axios.post(
            "http://localhost:3000/withdraw",
            withdrawMontant,
            config
          );

          navigate("/view-account")
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Invalid pass");
      }
    } catch (error) {
      console.log("Houve um erro na validação da sua senha");
    }
  };

  const handleWithdraw = (e) => {
    const convertedMontant = Number(e.target.value);

    setWIthdrawMontant({withdrawal_amount: convertedMontant});
  };

  const handlePassword = async (e) => {
    setPassword(e.target.value);
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData);
      if (accessToken) {
        await GetBalance(accessToken, client, uid, setBalance);
      }
    } catch (error) {
      console.log("Houve um erro de validação: " + error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      validateTokenAuth();
    }
  }, []);

  return (
    <div className={styles.MainWithdrawPage}>
      <div className={styles.leftWithdrawScreen}>
        <div className={styles.topLeftWithdrawScreen}>
          <label htmlFor="withdrawMontant">
            Insira a quantia que deseja sacar:
          </label>
          <InputInsertData
            text="Quantia do saque"
            heightInput={4.5}
            widthInput={29}
            type="number"
            name="withdrawMontant"
            handleChange={handleWithdraw}
            required
          />
          {user.balance > withdrawMontant ? (
            <div className={styles.EnoughBalance}>Saldo suficiente</div>
          ) : (
            <div className={styles.notEnoughBalance}>Saldo insuficiente</div>
          )}
          <hr />
        </div>
        <div className={styles.bottomLeftWithdrawScreen}>
          <label htmlFor="withdrawPass">Insira a sua senha: </label>
          <InputInsertData
            text="Senha"
            heightInput={4.5}
            widthInput={29}
            type="password"
            name="withdrawPass"
            handleChange={handlePassword}
            required
          />
          <InputButton
            text="Confirmar"
            heightButton={5}
            widthButton={15}
            name="cofirmWithdraw"
            handleClick={withdrawAction}
          />
        </div>
      </div>
      <div className={styles.rightWithdrawScreen}>
        <div className={styles.newBalanceView}>
          <p>
            Saldo atual: {user.balance}
            <br />
            Novo saldo: {user.balance - withdrawMontant.withdrawal_amount}
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

export default WithdrawPage;
