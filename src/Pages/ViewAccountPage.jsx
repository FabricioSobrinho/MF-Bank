// import hooks
import { useEffect, useState } from "react";
import { useUser } from "../hooks/UserProvider";
import { validateToken } from "../hooks/ValidateToken";
import { GetBalance } from "../hooks/GetBalance";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoggedIn } from "../hooks/LoggedProvider";
import { useBaseUrl } from "../hooks/useBaseUrl";

// import styles
import styles from "../Styles/ViewAccountPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import Loader from "../Layouts/Components/Loader";
import SuccessMessage from "../Layouts/Components/SuccessMessage";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function ViewAccountPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const {baseUrl} = useBaseUrl();

  const { user, setUserData, setBalance } = useUser();
  const { logout } = useLoggedIn();

  let accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const toFixedValue = (value) => {
    return parseFloat(value).toFixed(2);
  };

  const logoutAction = async () => {
    try {
      const config = {
        headers: {
          "access-token": accessToken,
          client: client,
          uid: uid,
        },
      };

      const response = await axios.delete(
        `${baseUrl}/auth/sign_out`,
        config
      );

      logout();
      window.open('/login', '_blank')
    } catch (error) {
      console.log("Houve um erro ao tentar fazer logout" + error);
    }
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

  // validateToken
  if (accessToken && client) {
    useEffect(() => {
      validateTokenAuth();
      if (location.state) {
        setMessage(location.state.message);
      }

      setInterval(() => {
        navigate({ state: { message: null } });
        setMessage(null);
      }, 3000);
    }, []);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.mainViewAccountPage}>
          {message && <SuccessMessage message={message} />}
          <div className={styles.leftViewAccountPage}>
            <div className={styles.accInfo}>
              <p>Dados da conta:</p>
              <p>Nome Titular: {user.name} {user.sur_name}</p>
              <p>Saldo: {toFixedValue(user.balance)} R$</p>
              <p>Número da conta: {user.acc_number}</p>
            </div>
          </div>
          <div className={styles.rightViewAccountPage}>
            <menu className={styles.accMenu}>
              <div className={styles.menuTitle}>
                <h3>MENU</h3>
              </div>
              <div className={styles.menuButtons}>
                <InputButton
                  text="Saque"
                  heightButton={5}
                  widthButton={20}
                  route={"/withdraw"}
                />
                <InputButton
                  text="Deposito"
                  heightButton={5}
                  widthButton={20}
                  route={"deposit"}
                />
                <InputButton
                  text="Transferência"
                  heightButton={5}
                  widthButton={20}
                  route={"/transfer"}
                />
                <InputButton
                  text="Extrato"
                  heightButton={5}
                  widthButton={20}
                  route={"/extract"}
                />
                <InputButton
                  text="Editar informações"
                  heightButton={5}
                  widthButton={20}
                  route={"/edit"}
                />
                <InputButton
                  text="Fechar conta"
                  heightButton={5}
                  widthButton={20}
                  route={"/close-account"}
                />
                <InputButton
                  text="Sair"
                  heightButton={5}
                  widthButton={20}
                  handleClick={logoutAction}
                />
              </div>
            </menu>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewAccountPage;
