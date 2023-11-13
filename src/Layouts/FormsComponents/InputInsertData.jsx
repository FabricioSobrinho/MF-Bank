import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState, useRef } from "react";

import InputMask from "react-input-mask";

function InputInsertData({
  text,
  heightInput,
  widthInput,
  name,
  type,
  mask,
  maskChar,
  required,
  handleChange,
  value,
}) {
  const [showingPass, setShowingPass] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const isPassField = type === "password";
  const inputField = useRef(null);

  const inputStyle = {
    height: `${heightInput}rem`,
    width: `${widthInput}rem`,
    background: "#474747",
    padding: "1%",
    outline: "none",
    border: "none",
    borderRadius: "0.3125rem",
    fontSize: "1.7rem",
    margin: "1rem 2rem",
    boxShadow: "0px 0px 40px -15px #000000",
  };

  const changePassVisibility = () => {
    setShowingPass(!showingPass);
  };

  return (
    <>
      <InputMask
        style={inputStyle}
        required={required ? "required" : null}
        mask={mask ? mask : ""}
        maskChar={maskChar}
        placeholder={text}
        id={name}
        name={name}
        type={showingPass ? "text" : type}
        ref={inputField}
        value={value}
        onChange={handleChange}
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
