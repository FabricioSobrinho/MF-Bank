// import navbar styles
import styles from "../../Styles/LoggedNavBar.module.css";

function LoggedNavBar() {
  return (
    <nav className={styles.mainLoggedNavBar}>
      <a href="/">Logo MF-Bank</a>
    </nav>
  );
}

export default LoggedNavBar;