import styles from "../Styles/CloseAccountPage.module.css";

import CloseAccountImage from "../assets/Images/close-account-image.svg";

import InputInsertData from "../Layouts/FormsComponents/InputInsertData";
import InputButton from "../Layouts/FormsComponents/InputButton";

function CloseAccountPage() {
  return (
    <div className={styles.mainCloseAccountpage}>
      <div className={styles.leftCloseAccountScreen}>
        <div className={styles.topLeftCloseAccountScreen}>
          <h1>Nos vemos em breve!</h1>
          <p>Para confirmar o fechamento da sua conta insira sua senha:</p>

          <InputInsertData
            heightInput={4.2}
            widthInput={22.5}
            text="Senha"
            type="password"
            name="closePass"
          />
        </div>
        <div className={styles.bottomLeftCloseAccountScreen}>
          <div className={styles.alert}>
            Você ainda tem saldo em sua conta, se fechar sua conta irá perder
            esse saldo
          </div>
          <InputButton
            heightButton={4.5}
            widthButton={22.5}
            text="CONFIRMAR EXCLUSÃO"
          />
        </div>
      </div>
      <div className={styles.rightCloseAccountScreen}>
        <img src={CloseAccountImage} alt="exit image" />
      </div>
    </div>
  );
}

export default CloseAccountPage;
