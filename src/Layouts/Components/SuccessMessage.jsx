// import hooks
import { useEffect, useState } from "react";

// import styles
import styles from "../../Styles/SuccessMessage.module.css";

function SuccessMessage({ message }) {
  const time = 3000;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);
    if (time) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, time);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, time]);
  return (
    <>
      {visible && <div className={styles.mainSuccessMessage}>{message}</div>}
    </>
  );
}

export default SuccessMessage;
