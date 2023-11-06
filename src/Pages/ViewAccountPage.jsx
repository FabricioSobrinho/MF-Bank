// import hooks
import { useEffect, useState } from "react";
import { useUser } from "../hooks/UserProvider";
import { validateToken } from "../hooks/ValidateToken";

// import styles
import styles from "../Styles/ViewAccountPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";

// import dependencies
import Cookies from "js-cookie";

function ViewAccountPage() {
  const { user, setUserData } = useUser();

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData);
    } catch (error) {
      console.log("Houve um erro de validação: " + error);
    }
  };

  // validateToken
  if (accessToken && client) {
    useEffect(() => {
      validateTokenAuth();
    }, []);
  } else {
  }

  return (
    <div className={styles.mainViewAccountPage} onClick={validateToken}>
      <div className={styles.leftViewAccountPage}>
        <div className={styles.accInfo}>
          <p>Dados da conta:</p>
          <p>Nome Titular: {user.name}</p>
          <p>Saldo: </p>
          <p>Número da conta: {user.acc_number}</p>
        </div>
        <div className={styles.accLastActions}>
          <p>Últimas movimentações: </p>
          <p>Movimentação x: 3u9u</p>
          <p>Movimentação x: 3u9u</p>
          <p>Movimentação x: 3u9u</p>
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
          </div>
        </menu>
      </div>
    </div>
  );
}

export default ViewAccountPage;
