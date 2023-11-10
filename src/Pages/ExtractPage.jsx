// import hooks
import { useState, useEffect } from "react";
import { validateToken } from "../hooks/ValidateToken";
import { useUser } from "../hooks/UserProvider";

// import styles
import styles from "../Styles/ExtractPage.module.css";

// import components
import AccountMovements from "../Layouts/Components/AccountMovements";
import Loader from "../Layouts/Components/Loader";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";

function ExtractPage() {
  const { user, setUserData } = useUser();

  const [accountMovements, setAccountMovements] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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

      let accessTokenHeader = response.headers["access-token"];

      if (accessTokenHeader !== "") {
        Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestLastMoves = (moves) => {
    return moves.map((item) => item.slice(-5));
  };

  const validateTokenAuth = async () => {
    try {
      await validateToken(accessToken, client, uid, setUserData);
      if (accessToken) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.mainExtractPage} onClick={extractAction}>
          <div className={styles.leftExtractScreen}>
            <div className={styles.lastMovements}>
              <h1>ÚLTIMAS MOVIMENTAÇÕES</h1>
              {accountMovements.length > 0 && (
                <AccountMovements
                  accountMovements={requestLastMoves(accountMovements)}
                />
              )}
            </div>
          </div>
          <div className={styles.rightExtractScreen}>
            <h1>EXTRATO COMPLETO</h1>
            <div className={styles.allMovements}>
              {accountMovements.length > 0 && (
                <AccountMovements accountMovements={accountMovements} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExtractPage;
