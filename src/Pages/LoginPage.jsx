// import hooks
import { useState } from "react";
import { useLoggedIn } from "../hooks/LoggedProvider";
import { useBaseUrl } from "../hooks/useBaseUrl";

// import styles
import styles from "../Styles/LoginPage.module.css";

// import images
import loginScreenImage from "../assets/Images/login-screen-image.svg";

// import components
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";
import ValidationErrors from "../Layouts/Components/ValidationErrors";
import Loader from "../Layouts/Components/Loader";
import Errors from "../Layouts/Components/Errors";

// import dependencies
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState([]);

  const {baseUrl} = useBaseUrl();

  const { login } = useLoggedIn();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleLoginData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    setIsLoading(true);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${baseUrl}/auth/sign_in`,
        loginData,
        config
      );

      Cookies.set("accessToken", response.headers["access-token"], {
        expires: 1,
      });
      Cookies.set("client", response.headers.client, { expires: 1 });
      Cookies.set("uid", response.headers.uid, { expires: 1 });
      login();
      setIsLoading(false);

      navigate("/view-account");
    } catch (error) {
      setIsLoading(false);
      setErrors([["Usuario ou senha incorretos, tente novamente"]]);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.mainLoginPage}>
          <div className={styles.leftLoginScreen}>
            <img src={loginScreenImage} />
          </div>
          <div className={styles.rightLoginScreen}>
            {errors.length > 0 && <Errors errors={errors} />}

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
                  Ainda não é cliente?
                  <a href="/create-acc">Crie uma conta conosco</a> !
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LoginPage;
