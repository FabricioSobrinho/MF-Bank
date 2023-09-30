import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function InputButton({ text, widthButton, heightButton }) {
  const InputButton = styled.button`
    height: ${heightButton}rem;
    width: ${widthButton}rem;
    margin: 0.8rem;
    background: #2d3136;
    color: #f0f8ff;
    border-radius: 0.3125rem;
    border: none;
    outline: none;
    box-shadow: 0px 0px 40px -15px #000000;
    font-size: 1.7rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition: 0.4s;
    &:hover {
      background: #44484d;
      cursor: pointer;
    }
  `;
  return <InputButton>{text}</InputButton>;
}

export default InputButton;
