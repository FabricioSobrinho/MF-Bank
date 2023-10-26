import styles from "../../Styles/Errors.module.css";

function Errors({ errors }) {
  return (
    <div className={styles.errors}>
      {errors.length > 0 &&
        errors.map((item) => {
          if (Array.isArray(item)) {
            return item.map((err) => <p key={err}>{err}</p>);
          } else {
            return <p key={item}>{item}</p>;
          }
        })}
    </div>
  );
}

export default Errors;
