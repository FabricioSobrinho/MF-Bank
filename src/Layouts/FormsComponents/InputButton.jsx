import styles from "../../Styles/InputButton.module.css";

// eslint-disable-next-line react/prop-types
function InputButton({ text, onHandleClick }) {
  return (
    <input
      type="button"
      value={text}
      onClick={onHandleClick}
      className={styles.button}
    />
  );
}

export default InputButton;
