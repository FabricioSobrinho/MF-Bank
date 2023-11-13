// import hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import styles
import styles from "../Styles/EditAccountPage.module.css";

// import components
import ValidationErrors from "../Layouts/Components/ValidationErrors";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";
import Loader from "../Layouts/Components/Loader";
import Errors from "../Layouts/Components/Errors";

// import dependencies
import Cookies from "js-cookie";
import axios from "axios";
import { cpf } from "cpf-cnpj-validator";

function EditAccountPage() {
  const [userUpdatedData, setUserUpdatedData] = useState({
    name: "",
    sur_name: "",
    acc_number: "",
    cep: "",
    cpf: "",
    date_birth: "",
    email: "",
    phone_number: "",
    uf: "",
    password: "A",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const accessToken = Cookies.get("accessToken");
  const client = Cookies.get("client");
  const uid = Cookies.get("uid");

  const validCpf = cpf.isValid(userUpdatedData.cpf);
  const validPhoneNumber =
    userUpdatedData.phone_number &&
    userUpdatedData.phone_number[15] !== undefined &&
    userUpdatedData.phone_number[1] !== "0"
      ? true
      : false;

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const editAction = async () => {
    try {
      const config = {
        headers: {
          "access-token": accessToken,
          client: client,
          uid: uid,
        },
      };

      const editData = {
        name: userUpdatedData.name,
        sur_name: userUpdatedData.sur_name,
        cep: userUpdatedData.cep,
        cpf: userUpdatedData.cpf,
        date_birth: userUpdatedData.date_birth,
        email: userUpdatedData.email,
        phone_number: userUpdatedData.phone_number,
        uf: userUpdatedData.uf,
        current_password: password,
      };

      const response = await axios.put(
        "http://localhost:3000/auth",
        editData,
        config
      );

      let accessTokenHeader = response.headers["access-token"];
      let uidHeader = response.headers.uid;

      if (accessTokenHeader !== "") {
        Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
        Cookies.set("uid", uidHeader, { expires: 1 });
      }

      navigate("/view-account", {
        state: {
          message:
            userUpdatedData.email === uid
              ? "Seus dados foram atualizados!"
              : "Um email de confirmação foi enviado para seu novo email, confirme sua conta!",
        },
      });
    } catch (error) {
      setErrors([
        [
          "Por favor, insira seus dados corretamente e sua senha para a confirmação.",
        ],
      ]);
    }
  };

  const validateTokenAuth = async () => {
    try {
      const config = {
        headers: {
          "access-token": accessToken,
          client: client,
          uid: uid,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/auth/validate_token",
        config
      );

      let accessTokenHeader = response.headers["access-token"];

      if (accessTokenHeader !== "") {
        Cookies.set("accessToken", accessTokenHeader, { expires: 1 });
      }

      setUserUpdatedData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setErrors([["Houve um erro com suas credenciais de login."]]);
      setIsLoading(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleData = (e) => {
    setUserUpdatedData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    validateTokenAuth();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.mainEditAccountPage}>
          <div className={styles.formContainer}>
            <div className={styles.title}>
              <h1>EDITAR AS INFORMAÇÕES</h1>
              {errors.length > 0 && <Errors errors={errors} />}
            </div>
            <div className={styles.form}>
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="Nome"
                name="name"
                value={userUpdatedData.name}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="Sobrenome"
                name="sur_name"
                value={userUpdatedData.sur_name}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="Telefone"
                name="phone_number"
                mask="(99) 9 9999-9999"
                maskChar=""
                value={userUpdatedData.phone_number}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="UF"
                name="uf"
                mask={"**"}
                maskChar={""}
                value={userUpdatedData.uf.toUpperCase()}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="CEP"
                name="cep"
                mask="99999-999"
                maskChar={""}
                value={userUpdatedData.cep}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="CPF"
                name="cpf"
                mask="999.999.999.99"
                maskChar={""}
                value={userUpdatedData.cpf}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4}
                widthInput={22.5}
                text="data de nascimento"
                name="date_birth"
                mask={"99/99/9999"}
                maskChar={""}
                value={userUpdatedData.date_birth}
                required
                handleChange={handleData}
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="Email"
                name="email"
                type="email"
                value={userUpdatedData.email}
                handleChange={handleData}
                required
              />
              <InputInsertData
                heightInput={4.2}
                widthInput={22.5}
                text="Senha para cofirmação"
                name="pass"
                type="password"
                handleChange={handlePassword}
                required
              />
            </div>
            <div className={styles.button}>
              {userUpdatedData.name &&
                userUpdatedData.sur_name &&
                userUpdatedData.acc_number &&
                userUpdatedData.cep &&
                userUpdatedData.cpf &&
                userUpdatedData.date_birth &&
                userUpdatedData.email &&
                userUpdatedData.phone_number &&
                userUpdatedData.uf &&
                validCpf &&
                validPhoneNumber &&
                isValidEmail(userUpdatedData.email) && (
                  <InputButton
                    text="CONFIRMAR MUDANÇAS"
                    heightButton={5.5}
                    widthButton={23}
                    handleClick={editAction}
                  />
                )}
                
              <ValidationErrors userData={userUpdatedData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditAccountPage;
