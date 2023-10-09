// import styles
import styles from "../Styles/WithdrawPage.module.css";

// import components 
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";

function WithdrawPage() {
  return (
    <div className={styles.MainWithdrawPage}>
      <div className={styles.leftWithdrawScreen}>
        <div className={styles.topLeftWithdrawScreen}>
          <label htmlFor="Quantia do saque">
            Insira a quantia que deseja sacar:{" "}
          </label>
          <InputInsertData
            text="Quantia do saque"
            heightInput={4.5}
            widthInput={29}
          />
          <div className={styles.EnoughBalance}>Saldo suficiente</div>
          <div className={styles.notEnoughBalance}>Saldo insuficiente</div>
          <hr />
        </div>
        <div className={styles.bottomLeftWithdrawScreen}>
          <label htmlFor="Senha">Insira a sua senha: </label>
          <InputInsertData text="Senha" heightInput={4.5} widthInput={29} />
          <InputButton text="Confirmar" heightButton={5} widthButton={15} />
        </div>
      </div>
      <div className={styles.rightWithdrawScreen}>
        <div className={styles.newBalanceView}>
          <p>
            Saldo atual: x
            <br />
            Novo saldo: x - withdrawMontant
          </p>
        </div>
        <InputButton
          text="Cancelar operação"
          heightButton={5.125}
          widthButton={29}
        />
      </div>
    </div>
  );
}

export default WithdrawPage;
