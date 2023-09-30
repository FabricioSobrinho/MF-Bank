import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function InputInsertData({ text, heightInput, widthInput }) {
  const InputInsertData = styled.input`
  height: ${heightInput}rem;
  width: ${widthInput}rem;
  background: #474747;
  padding: 1%;

  outline: none;
  border: none;
  border-radius: 0.3125rem;

  font-size: 1.7rem;
  margin: 1rem 2rem;
  box-shadow: 0px 0px 40px -15px #000000;
  `;
  return <InputInsertData placeholder={text}/>
}

export default InputInsertData;