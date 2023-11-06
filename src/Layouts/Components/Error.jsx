import React from "react";

function Error({ text }) {
  return <p key={text}>{text}</p>;
}

export default Error;
