// import hooks
import { useState, useEffect } from "react";
import { validateToken } from "../hooks/ValidateToken";
import { useUser } from "../hooks/UserProvider";
import { useNavigate } from "react-router-dom";

// import styles
import styles from "../Styles/ExtractPage.module.css";

// import components
import AccountMovement from "../Layouts/Components/AccountMovement";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function ExtractPage() {
  const { user, setUserData } = useUser();

  const [accountMovements, setAccountMovements] = useState([]);

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const extractAction = async () => {
    try {
      const config = {
        headers: {
          "access-token": accessToken,
          client: client,
          uid: uid,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/account_movements",
        config
      );

      setAccountMovements([response.data]);
      console.log(
        accountMovements.map((accountMovements) => accountMovements[51])
      );
    } catch (error) {
      console.log(error);
    }
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData);
      if (accessToken) {
        // setIsLoading(false);
      } else {
        // setIsLoading(true);
      }
    } catch (error) {
      console.log("Houve um erro de validação: " + error);
    }
  };

  useEffect(() => {
    validateTokenAuth();
    extractAction();
  }, []);

  return (
    <div className={styles.mainExtractPage} onClick={extractAction}>
      <div className={styles.leftExtractScreen}>
        <div className={styles.lastMovements}>
          <h1>ÚLTIMAS MOVIMENTAÇÕES</h1>
          {user.balance}
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
        </div>
      </div>
      <div className={styles.rightExtractScreen}>
        <h1>EXTRATO COMPLETO</h1>
        <div className={styles.allMovements}>
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
        </div>
      </div>
    </div>
  );
}

export default ExtractPage;
