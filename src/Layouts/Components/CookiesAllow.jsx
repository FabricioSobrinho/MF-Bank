import { useRef } from "react";
import styles from "../../Styles/CookiesAllow.module.css";
import InputButton from "../FormsComponents/InputButton";

function CookiesAllow() {
  const cookiesMessage = useRef(null);

  const cookiesAllowed = () => {
    cookiesMessage.current.style.display = "none";
  };

  return (
    <div className={styles.cookieAllow} ref={cookiesMessage}>
      <div className={styles.mainCookiesAllow}>
        <p>
          Nossa plataforma utiliza cookies para garantir que você tenha a melhor
          experiência.
        </p>

        <InputButton
          text="Concordo"
          heightButton={5}
          widthButton={15}
          handleClick={cookiesAllowed}
        />
      </div>
    </div>
  );
}

export default CookiesAllow;
