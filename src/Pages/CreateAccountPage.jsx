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
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Sobrenome"
              name="surname"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Email"
              name="email"
              type="email"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Telefone"
              name="phoneNumber"
              mask="(99) 9 9999-9999"
              maskChar=""
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="UF"
              name="uf"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="CEP"
              name="cep"
              mask="99999-999"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="CPF"
              name="cpf"
              mask="999.999.999-99"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Cidade"
              name="city"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Senha"
              type="password"
              name="userPass"
              required
            />
            <InputInsertData
              heightInput={4.2}
              widthInput={22.5}
              text="Confirmar senha"
              type="password"
              name="userPassConfirm"
              required
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
