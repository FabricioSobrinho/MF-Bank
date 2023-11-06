// import hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles
import styles from "../Styles/CreateAccountPage.module.css";

// import images
import createAccountImage from "../assets/Images/create-account-screen-image.svg";

// import components
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";
import Errors from "../Layouts/Components/Errors";
import ValidationErrors from "../Layouts/Components/ValidationErrors";
import Loader from "../Layouts/Components/Loader";

// import dependencies
import axios from "axios";
import { cpf } from "cpf-cnpj-validator";

function CreateAccountScreen() {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
    sur_name: "",
    phone_number: "",
    cpf: "",
    uf: "",
    cep: "",
    date_birth: "",
  });

  const validCpf = cpf.isValid(userData.cpf);
  const validPhoneNumber =
    userData.phone_number &&
    userData.phone_number[15] !== undefined &&
    userData.phone_number[1] !== "0"
      ? true
      : false;

  const setInputValue = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const sentAccount = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth",
        userData,
        config
      );
      console.log("Usuário criado com sucesso:", response.status);
      setIsLoading(false);

      if (response.status === 200) navigate("/acc-confirmation");
    } catch (error) {
      console.error(
        "Erro ao criar usuário:",
        error.response.data.errors.full_messages
      );
      setErrors([error.response.data.errors.full_messages]);
      setIsLoading(false);
      setUserData({
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
        sur_name: "",
        phone_number: "",
        cpf: "",
        uf: "",
        cep: "",
        date_birth: "",
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.mainCreateAccountPage}>
          <div className={styles.leftCreateAccountScreen}>
            <img src={createAccountImage} />
          </div>
          <div className={styles.rightCreateAccountScreen}>
            <div className={styles.rightCreateAccountScreenContainer}>
              <div className={styles.form}>
                {errors.length > 0 && <Errors errors={errors} />}
                <div style={{ textAlign: "center" }}>
                  <h1>INSIRA SEUS DADOS</h1>
                  <p>* campos obrigatórios</p>
                </div>

                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Nome *"
                  name="name"
                  required
                  handleChange={setInputValue}
                  value={userData.name ? userData.name : ""}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Sobrenome *"
                  name="sur_name"
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Email *"
                  name="email"
                  type="email"
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Telefone *"
                  name="phone_number"
                  mask="(99) 9 9999-9999"
                  maskChar=""
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="UF"
                  name="uf"
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="CEP"
                  name="cep"
                  mask="99999-999"
                  maskChar=""
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="CPF *"
                  name="cpf"
                  mask="999.999.999-99"
                  maskChar=""
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="data de nascimento"
                  name="date_birth"
                  mask={"99/99/9999"}
                  maskChar={""}
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Senha *"
                  type="password"
                  name="password"
                  required
                  handleChange={setInputValue}
                />
                <InputInsertData
                  heightInput={4}
                  widthInput={22.5}
                  text="Confirmar senha *"
                  type="password"
                  name="password_confirmation"
                  required
                  handleChange={setInputValue}
                />

                {userData.cpf &&
                  userData.email &&
                  userData.name &&
                  userData.password &&
                  userData.password_confirmation &&
                  userData.sur_name &&
                  userData.password === userData.password_confirmation &&
                  userData.password.length >= 8 &&
                  validCpf &&
                  validPhoneNumber && (
                    <InputButton
                      heightButton={5.5}
                      widthButton={23}
                      text={"CRIAR CONTA"}
                      handleClick={sentAccount}
                    />
                  )}
                <ValidationErrors userData={userData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateAccountScreen;
