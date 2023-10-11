import styles from "../Styles/CreateAccountPage.module.css";

import createAccountImage from "../assets/Images/create-account-screen-image.svg";

import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";

function CreateAccountScreen() {
  return (
    <div className={styles.mainCreateAccountPage}>
      <div className={styles.leftCreateAccountScreen}>
        <img src={createAccountImage} />
      </div>
      <div className={styles.rightCreateAccountScreen}>
        <div className={styles.rightCreateAccountScreenContainer}>
          <div className={styles.form}>
            <h1>INSIRA SEUS DADOS</h1>
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Nome"
              name="name"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Sobrenome"
              name="surname"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Email"
              name="email"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Telefone"
              name="phoneNumber"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="UF"
              name="uf"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="CEP"
              name="cep"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="CPF"
              name="cpf"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Cidade"
              name="city"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Senha"
              type="password"
              name="userPass"
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Confirmar senha"
              type="password"
              name="userPassConfirm"
            />

            <InputButton
              heightButton={5.5}
              widthButton={23}
              text={"CRIAR CONTA"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountScreen;
