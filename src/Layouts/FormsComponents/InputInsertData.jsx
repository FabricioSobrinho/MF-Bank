import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function InputInsertData({text, widthInput, heighInput}) {
  const InputInsertData = styled.input`
<<<<<<< HEAD
    width: ${widthInput}%;
    height: ${heighInput}%;
=======
    width: ${widthInput}rem;
    height: ${heighInput}rem;
>>>>>>> origin/fix-input-button
    background: #474747;
    padding: 2%;

    outline: none;
    border: none;
    border-radius: 0.3125rem;

    font-size: 1.7rem;
<<<<<<< HEAD
    margin: 2rem;
=======
    margin: 1.5rem;
>>>>>>> origin/fix-input-button
    box-shadow: 0px 0px 40px -15px #000000;

  `;
  return (
    <>
      <InputInsertData placeholder={text}/>
    </>
  );
}

export default InputInsertData;
