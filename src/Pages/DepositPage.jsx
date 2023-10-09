// import styles
import styles from "../Styles/DepositPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";

function DepositPage() {
  return (
    <div className={styles.MainDepositPage}>
      <div className={styles.leftDepositScreen}>
        <div className={styles.topLeftDepositScreen}>
          <label htmlFor="Quantia do saque">
            Insira a quantia que deseja depositar:{" "}
          </label>
          <InputInsertData
            text="Quantia do saque"
            heightInput={4.5}
            widthInput={29}
          />
          <InputButton text="Confirmar" heightButton={5} widthButton={15} />
          <div className={styles.EnoughBalance}>Saldo suficiente</div>
          <div className={styles.notEnoughBalance}>Saldo insuficiente</div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="favSelector" />
            <label htmlFor="favSelector">Favorecido é você mesmo?</label>
          </div>
          <hr />
        </div>
        <div className={styles.bottomLeftDepositScreen}>
          <label htmlFor="Senha">Insira a sua senha: </label>
          <InputInsertData text="Senha" heightInput={4.5} widthInput={29} />
          <InputButton text="Confirmar" heightButton={5} widthButton={15} />
        </div>
      </div>
      <div className={styles.rightDepositScreen}>
        <div className={styles.newBalanceView}>
          <p>
            Saldo atual: x
            <br />
            Novo saldo: x - DepositMontant
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

export default DepositPage;
