import styles from "../Styles/EditAccountPage.module.css";

import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";

function EditAccountPage() {
  return (
    <div className={styles.mainEditAccountPage}>
      <div className={styles.formContainer}>
        <div className={styles.title}>
          <h1>EDITAR AS INFORMAÇÕES</h1>
        </div>
        <div className={styles.form}>
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
            text="Telefone"
            name="phone"
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
            text="Email"
            name="email"
          />
          <InputInsertData
            heightInput={4.2}
            widthInput={22.5}
            text="Senha"
            name="pass"
            type="password"
          />
        </div>
        <div className={styles.button}>
          <InputButton
            text="CONFIRMAR MUDANÇAS"
            heightButton={5.5}
            widthButton={23}
          />
        </div>
      </div>
    </div>
  );
}

export default EditAccountPage;
