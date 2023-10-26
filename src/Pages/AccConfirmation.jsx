import React from "react";

function AccConfirmation() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: `3rem`,
    padding: `4rem`
  };

  return (
    <div style={style}>
      <p>Verifique sua caixa de email e confirme sua conta.</p>
    </div>
  );
}

export default AccConfirmation;
