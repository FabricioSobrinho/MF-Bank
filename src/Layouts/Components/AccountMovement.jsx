import styles from "../../Styles/AccountMovement.module.css";

// eslint-disable-next-line react/prop-types
function AccountMovement({ movementType, seender, montantValue }) {
  return (
    <div className={styles.accountMovement}>
      <span>31/10/2022</span>
      <div className={styles.movementType}> {movementType} </div>
      <div className={styles.seender}> {seender} </div>
      <div className={styles.montant}> {montantValue} </div>
    </div>
  );
}

AccountMovement.defaultProps = {
  movementType: "",
  seender: "",
  montantValue: 0,
};

export default AccountMovement;
