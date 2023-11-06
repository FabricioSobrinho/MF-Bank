import styles from "../../Styles/Errors.module.css";
import Error from "./Error";

function Errors({ errors }) {
  return (
    <div className={styles.errors}>
      {errors.length > 0 &&
        errors.map((error) => (
          <p key={error}>
            {error.map((itemError) => (
              <Error text={itemError} key={itemError}/>
            ))}
          </p>
        ))}
    </div>
  );
}

export default Errors;
