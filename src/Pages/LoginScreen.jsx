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
              heighInput={4.5}
              widthInput={22.5}
            />
            <InputInsertData
              text="Senha"
              type="password"
              name="pass"
              heighInput={4.5}
              widthInput={22.5}
            />
            <InputButton text="Entrar" widthButton={19} heightButton={5.3125} />
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
