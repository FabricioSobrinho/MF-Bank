import AccountMovement from "./AccountMovement";

function AccountMovements({ accountMovements }) {
  console.log(accountMovements);
  return (
    <>
      {accountMovements.map((accMoves) =>
        accMoves.map((accMove) => (
          <AccountMovement
            accMove={accMove}
          />
        ))
      )}
    </>
  );
}

export default AccountMovements;
