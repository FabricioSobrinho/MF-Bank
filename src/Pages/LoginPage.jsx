import styles from "../Styles/LoginPage.module.css";

import loginScreenImage from "../assets/Images/login-screen-image.svg";

import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";
import axios from "axios";
import { useState } from "react";

function LoginScreen() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData)
  };

  const loginUser = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/sign_in",
        loginData,
        config
      );

      console.log("Usuário logado com sucesso:", response);
    } catch (error) {
      console.log("Houve um erro na autenticação" + error);
    }
  };

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
              text="Email"
              type="text"
              name="email"
              widthInput={32}
              heightInput={5}
              required
              handleChange={handleLoginData}
              />
            <InputInsertData
              text="Senha"
              type="password"
              name="password"
              widthInput={32}
              heightInput={5}
              required
              handleChange={handleLoginData}
            />
            <InputButton
              text="Entrar"
              heightButton={4.5}
              widthButton={20}
              handleClick={loginUser}
            />
          </div>
          <div className={styles.createACcountRedirect}>
            <hr />
            <p>
              Ainda não é cliente?<a href="#">Crie uma conta conosco</a> !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginScreen;
