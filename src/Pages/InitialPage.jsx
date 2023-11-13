// import hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../hooks/LoggedProvider";

// import images
import initialScreenImage from "../assets/Images/initial-screen-image.svg";

// import styles
import styles from "../Styles/InitialPage.module.css";

// import elements
import InputButton from "../Layouts/FormsComponents/InputButton";
import CookiesAllow from "../Layouts/Components/CookiesAllow";
import SuccessMessage from "../Layouts/Components/SuccessMessage";

function InitialScreen() {
  const { isLoggedIn } = useLoggedIn();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }

    setInterval(() => {
      navigate({ state: { message: null } });
      setMessage(null);
    }, 3000);
  }, []);

  return (
    <div className={styles.mainInitialPage}>
      {message && <SuccessMessage message={message} />}
      <div className={styles.initialLeftPage}>
        <div className={styles.text}>
          <h1>Junte-se a nós, proteja seu patrimônio!</h1>
          <p>O banco mais seguro da américa latina!</p>
        </div>
        <div className={styles.form}>
          <InputButton
            route={isLoggedIn ? "/view-account" : "/login"}
            text="Acessar"
            heightButton={7}
            widthButton={30}
          />
        </div>
      </div>

      <div className={styles.initialRightPage}>
        <img src={initialScreenImage} alt="Savings ico" />
      </div>
      <CookiesAllow />
    </div>
  );
}

export default InitialScreen;
