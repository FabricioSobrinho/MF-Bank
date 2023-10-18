// import images to the page
import initialScreenImage from "../assets/Images/initial-screen-image.svg";

// import styles to the page
import styles from "../Styles/InitialPage.module.css";

// import elements to the page
import Button from "../Layouts/FormsComponents/Button";
import CookiesAllow from "../Layouts/Components/CookiesAllow";

function InitialScreen() {
  return (
    <div className={styles.mainInitialPage}>
      <div className={styles.initialLeftPage}>
        <div className={styles.text}>
          <h1>Junte-se a nós, proteja seu patrimônio!</h1>
          <p>O banco mais seguro da américa latina!</p>
        </div>
        <div className={styles.form}>
          <Button text="Acessar" />
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
