import styled from "styled-components";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
function InputInsertData({ text, heightInput, widthInput, name, type }) {
  const [showingPass, setShowingPass] = useState(false);
  const isPassField = type === "password";
  const inputField = useRef(null);

  const InputInsertDataStyled = styled.input`
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

  const changePassVisibility = () => {
    setShowingPass(!showingPass);
  };

  return (
    <>
      <InputInsertDataStyled
        placeholder={text}
        id={name}
        type={showingPass ? "text" : type}
        defaultValue={inputField.current ? inputField.current.value : ""}
        ref={inputField}
        onChange={(e) => {
          if (inputField.current) {
            inputField.current.value = e.target.value;
          }
        }}
      />
      {isPassField && (
        <label htmlFor={name} onClick={changePassVisibility}>
          {showingPass ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
        </label>
      )}
    </>
  );
}

InputInsertData.defaultProps = {
  heightInput: 4,
  widthInput: 20,
  text: "",
};

export default InputInsertData;
