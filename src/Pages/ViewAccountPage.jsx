import InputButton from "../Layouts/FormsComponents/InputButton";
import styles from "../Styles/ViewAccountPage.module.css";

function ViewAccountPage() {
  return (
    <div className={styles.mainViewAccountPage}>
      <div className={styles.leftViewAccountPage}>
        <div className={styles.accInfo}>
          <p>Dados da conta:</p>
          <p>Nome Titular: </p>
          <p>Saldo: </p>
          <p>Número da conta:</p>
        </div>
        <div className={styles.accLastActions}>
          <p>Últimas movimentações: </p>
          <p>Movimentação x: 3u9u</p>
          <p>Movimentação x: 3u9u</p>
          <p>Movimentação x: 3u9u</p>
        </div>
      </div>
      <div className={styles.rightViewAccountPage}>
        <menu className={styles.accMenu}>
          <div className={styles.menuTitle}>
            <h3>MENU</h3>
          </div>
          <div className={styles.menuButtons}>
            <InputButton text="Saque" heightButton={5} widthButton={20} />
            <InputButton text="Deposito" heightButton={5} widthButton={20} />
            <InputButton
              text="Transferência"
              heightButton={5}
              widthButton={20}
            />
            <InputButton text="Extrato" heightButton={5} widthButton={20} />
            <InputButton
              text="Editar informções"
              heightButton={5}
              widthButton={20}
            />
            <InputButton
              text="Fechar conta"
              heightButton={5}
              widthButton={20}
            />
          </div>
        </menu>
      </div>
    </div>
  );
}

export default ViewAccountPage;
