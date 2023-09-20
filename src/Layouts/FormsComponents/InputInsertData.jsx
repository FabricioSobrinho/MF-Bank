import styles from "../../Styles/InputInsertData.module.css";

// eslint-disable-next-line react/prop-types
function InputInsertData({ type, text, name }) {
  return (
    <>
      <input
        type={type}
        className={styles.input}
        placeholder={text}
        name={name}
      />
    </>
  );
}

export default InputInsertData;
