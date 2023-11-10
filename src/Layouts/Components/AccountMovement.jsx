import styles from "../../Styles/AccountMovement.module.css";

// eslint-disable-next-line react/prop-types
function AccountMovement({ accMove }) {
  const formatDate = (dateHourUTC) => {
    let dateUtc = new Date(dateHourUTC);

    dateUtc.setUTCHours(dateUtc.getUTCHours() - 3);

    let options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    return dateUtc.toLocaleString("pt-BR", options);
  };

  return (
    <div className={styles.accountMovement}>
      <span>Data: {formatDate(accMove.created_at)}</span>
      <div className={styles.movementType}>
        {" "}
        Movimentação: {accMove.movement_type}{" "}
      </div>
      {accMove.sender !== null && (
        <div className={styles.seender}> Remetente: {accMove.sender} </div>
      )}
      <div className={styles.montant}> Valor: {accMove.montant} </div>
      {accMove.target !== null && (
        <div className={styles.target}>Destinatário: {accMove.target} </div>
      )}
    </div>
  );
}

AccountMovement.defaultProps = {
  movementType: "",
  seender: "",
  montantValue: 0,
};

export default AccountMovement;
