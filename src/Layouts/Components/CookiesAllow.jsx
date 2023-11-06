// import hooks
import { useRef } from "react";

// import styles
import styles from "../../Styles/CookiesAllow.module.css";

// import components
import InputButton from "../FormsComponents/InputButton";

//import dependencies
import Cookies from "js-cookie";

function CookiesAllow() {
  const cookiesMessage = useRef(null);
  let showCookiesMessage;

  const cookiesAllowed = () => {
    cookiesMessage.current.style.display = "none";
    showCookiesMessage = Cookies.set("showCookiesDisable", "true", {
      expires: 7,
    });
  };

  return (
    <>
      {!Cookies.get("showCookiesDisable") && (
        <div className={styles.cookieAllow} ref={cookiesMessage}>
          <div className={styles.mainCookiesAllow}>
            <p>
              Nossa plataforma utiliza cookies para garantir que você tenha a
              melhor experiência.
            </p>

            <InputButton
              text="Concordo"
              heightButton={5}
              widthButton={15}
              handleClick={cookiesAllowed}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CookiesAllow;
