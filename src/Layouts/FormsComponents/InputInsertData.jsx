import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function InputInsertData({text}) {
  const InputInsertData = styled.input`
    width: 80%;
    height: 30%;
    background: #474747;
    padding: 2%;

    outline: none;
    border: none;
    border-radius: 0.3125rem;

    font-size: 1.7rem;
    margin: 2rem;
    box-shadow: 0px 0px 40px -15px #000000;

  `;
  return (
    <>
      <InputInsertData placeholder={text}/>
    </>
  );
}

export default InputInsertData;
