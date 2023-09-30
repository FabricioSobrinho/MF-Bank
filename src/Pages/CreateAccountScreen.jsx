import styles from "../Styles/CreateAccountScreen.module.css";

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
            <InputInsertData heightInput={4.2} widthInput={22.5} text="Nome" />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Sobrenome"
            />
            <InputInsertData heightInput={4.2} widthInput={22.5} text="Email" />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Telefone"
            />
            <InputInsertData heightInput={4.2} widthInput={22.5} text="UF" />
            <InputInsertData heightInput={4.2} widthInput={22.5} text="CEP" />
            <InputInsertData heightInput={4.2} widthInput={22.5} text="CPF" />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Cidade"
            />
            <InputInsertData heightInput={4.2} widthInput={22.5} text="Senha" />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Confirmar senha"
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
