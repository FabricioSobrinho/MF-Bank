import styled from "styled-components";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState, useRef } from "react";

import InputMask from "react-input-mask";

// eslint-disable-next-line react/prop-types
function InputInsertData({
  text,
  heightInput,
  widthInput,
  name,
  type,
  mask,
  maskChar,
  required,
}) {
  const [showingPass, setShowingPass] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const isPassField = type === "password";
  const inputField = useRef(null);

  const InputInsertDataStyled = styled(InputMask)`
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

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <InputInsertDataStyled
        required={required ? "required" : null}
        mask={mask ? mask : ""}
        maskChar={maskChar}
        placeholder={text}
        id={name}
        type={showingPass ? "text" : type}
        defaultValue={inputField.current ? inputField.current.value : ""}
        ref={inputField}
        onChange={(e) => {
          if (inputField.current) {
            inputField.current.value = e.target.value;

            if (type == "email") {
              const isEmailValid = isValidEmail(inputField.current.value);

              if (isEmailValid) {
                setValidEmail(true);
              }
            }
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
