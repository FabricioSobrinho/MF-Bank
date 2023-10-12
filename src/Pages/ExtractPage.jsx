import styles from "../Styles/ExtractPage.module.css";

import AccountMovement from "../Layouts/Components/AccountMovement";

function ExtractPage() {
  return (
    <div className={styles.mainExtractPage}>
      <div className={styles.leftExtractScreen}>
        <div className={styles.lastMovements}>
          <h1>ÚLTIMAS MOVIMENTAÇÕES</h1>

          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
          <p>Saldo x: entrada xxx, tipo da movimentação</p>
        </div>
      </div>
      <div className={styles.rightExtractScreen}>
        <h1>EXTRATO COMPLETO</h1>
        <div className={styles.allMovements}>
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
          <AccountMovement
            movementType="Deposit"
            montantValue={210}
            seender="Kiriko"
          />
        </div>
      </div>
    </div>
  );
}

export default ExtractPage;
