import styles from "../Styles/LoginScreen.module.css";

import loginScreenImage from "../assets/Images/login-screen-image.svg";

import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";

function LoginScreen() {
  return (
    <section className={styles.mainLoginPage}>
      <div className={styles.leftLoginScreen}>
        <img src={loginScreenImage} />
      </div>
      <div className={styles.rightLoginScreen}>
        <div className={styles.boxForm}>
          <h1>Entre</h1>
          <div className={styles.loginForm}>
            <InputInsertData
              text="Nome"
              type="text"
              name="name"
              widthInput={70}
              heighInput={30}
            />
            <InputInsertData
              text="Senha"
              type="password"
              name="pass"
              widthInput={70}
              heighInput={30}
            />
            <InputButton text="Entrar" />
          </div>
          <div className={styles.createACcountRedirect}>
            <hr />
            <p>
              Ainda não é cliente? <a href="#">Crie uma conta conosco</a> !{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginScreen;
