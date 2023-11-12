// import hooks
import { useState, useEffect } from "react";
import { validateToken } from "../hooks/ValidateToken";
import { useNavigate } from "react-router-dom";
import { ValidatePassword } from "../hooks/ValidatePassword";
import { useLoggedIn } from "../hooks/LoggedProvider";
import { useUser } from "../hooks/UserProvider";

// import styles
import styles from "../Styles/CloseAccountPage.module.css";

// import images
import CloseAccountImage from "../assets/Images/close-account-image.svg";

// import components
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";
import Loader from "../Layouts/Components/Loader";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function CloseAccountPage() {
  const { logout } = useLoggedIn();
  const { user, setUserData } = useUser();
  const [password, setPassword] = useState();

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const navigate = useNavigate();

  const deleteAccountAction = async () => {
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

          const response = await axios.delete(
            "http://localhost:3000/auth",
            config
          );
          logout();
          navigate("/");
        } catch (error) {
          console.log("Houve um erro na exclusão da sua conta" + error);
        }
      } else {
        console.log("Senha incorreta");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData, logout);
      if (accessToken) {
        // setIsLoading(false);
      } else {
        // setIsLoading(true);
      }
    } catch (error) {
      console.log("Houve um erro de validação: " + error);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    validateTokenAuth();
  }, []);
  return (
    <div className={styles.mainCloseAccountpage}>
      <div className={styles.leftCloseAccountScreen}>
        <div className={styles.topLeftCloseAccountScreen}>
          <h1>Nos vemos em breve!</h1>
          <p>Para confirmar o fechamento da sua conta insira sua senha:</p>

          <InputInsertData
            heightInput={4.2}
            widthInput={22.5}
            text="Senha"
            type="password"
            name="closePass"
            handleChange={handlePassword}
          />
        </div>
        <div className={styles.bottomLeftCloseAccountScreen}>
          <div className={styles.alert}>
            Caso ainda tenha saldo em sua conta, se fechar sua conta irá perder
            esse saldo!
          </div>
          <InputButton
            heightButton={4.5}
            widthButton={22.5}
            text="CONFIRMAR EXCLUSÃO"
            handleClick={deleteAccountAction}
          />
        </div>
      </div>
      <div className={styles.rightCloseAccountScreen}>
        <img src={CloseAccountImage} alt="exit image" />
      </div>
    </div>
  );
}

export default CloseAccountPage;
