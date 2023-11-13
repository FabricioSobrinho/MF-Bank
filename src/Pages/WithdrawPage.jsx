// import hooks
import { useEffect, useState } from "react";
import { useUser } from "../hooks/UserProvider";
import { validateToken } from "../hooks/ValidateToken";
import { GetBalance } from "../hooks/GetBalance";
import { ValidatePassword } from "../hooks/ValidatePassword";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../hooks/LoggedProvider";

// import styles
import styles from "../Styles/WithdrawPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import Errors from "../Layouts/Components/Errors";
import Loader from "../Layouts/Components/Loader";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function WithdrawPage() {

  const { user, setUserData, setBalance } = useUser();

  const [withdrawMontant, setWIthdrawMontant] = useState({
    withdrawal_amount: 0,
  });

  const [password, setPassword] = useState();

  const [errors, setErrors] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const { logout } = useLoggedIn(); 

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const withdrawAction = async () => {
    if (withdrawMontant.withdrawal_amount > 0) {
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

            navigate("/view-account", {
              state: { message: "Saque efetuado com sucesso!" },
            });
          } catch (error) {
            setErrors([
              ["Houve um erro ao finalizar a transação, tente novamente!"],
            ]);
          }
        } else {
          setErrors([["Senha incorreta"]]);
        }
      } catch (error) {
        setErrors(["Houve um erro na validação da sua senha"]);
      }
    } else {
      setErrors([["Insira um valor válido para saque."]]);
    }
  };

  const handleWithdraw = (e) => {
    const convertedMontant = Number(e.target.value);

    setWIthdrawMontant({ withdrawal_amount: convertedMontant });
  };

  const handlePassword = async (e) => {
    setPassword(e.target.value);
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
        setErrors(true);
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.MainWithdrawPage}>
          <div className={styles.leftWithdrawScreen}>
            <div className={styles.topLeftWithdrawScreen}>
              {errors.length > 0 && <Errors errors={errors} />}
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

              {withdrawMontant.withdrawal_amount < 0 ? (
                <div className={styles.notEnoughBalance}>Saldo inválido</div>
              ) : user.balance >= withdrawMontant.withdrawal_amount ? (
                <div className={styles.EnoughBalance}>Saldo suficiente</div>
              ) : (
                <div className={styles.notEnoughBalance}>
                  Saldo insuficiente
                </div>
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
                Saldo atual: {toFixedValue(user.balance)}
                <br />
                Novo saldo:{" "}
                {toFixedValue(user.balance - withdrawMontant.withdrawal_amount)}
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

export default WithdrawPage;
