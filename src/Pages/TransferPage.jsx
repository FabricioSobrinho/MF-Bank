// import styles
import styles from "../Styles/TransferPage.module.css";

// import components
import InputButton from "../Layouts/FormsComponents/InputButton";
import InputInsertData from "../Layouts/FormsComponents/InputInsertData";

function TransferPage() {
  return (
    <div className={styles.MainTransferPage}>
      <div className={styles.leftTransferScreen}>
        <div className={styles.topLeftTransferScreen}>
          <label htmlFor="transferOriginAcc">
            Insira a quantia que deseja transferir:{" "}
          </label>
          <InputInsertData
            text="Quantia da transferêcia"
            heightInput={4.5}
            widthInput={29}
            name="transferOriginAcc"
          />
          <label htmlFor="favTransferName">Insira o nome do favorecido: </label>
          <InputInsertData
            text="Nome do favorecido"
            heightInput={4.5}
            widthInput={29}
            name="favTransferName"
          />
          <div className={styles.EnoughBalance}>Saldo suficiente</div>
          <div className={styles.notEnoughBalance}>Saldo insuficiente</div>
          <hr />
        </div>
        <div className={styles.bottomLeftTransferScreen}>
          <label htmlFor="transferPass">Insira a sua senha: </label>
          <InputInsertData
            text="Senha"
            heightInput={4.5}
            widthInput={29}
            type="password"
            name="transferPass"
          />
          <InputButton text="Confirmar" heightButton={5} widthButton={15} />
        </div>
      </div>
      <div className={styles.rightTransferScreen}>
        <div className={styles.newBalanceView}>
          <p>
            Saldo atual: x
            <br />
            Novo saldo: x - TransferMontant
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

export default TransferPage;
