// import button style
import styles from "../../Styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ text, redirectTo }) {
  return (
    <button href={redirectTo} className={styles.button}>
      {text}
    </button>
  );
}

export default Button;
