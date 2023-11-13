// import navbar styles
import styles from "../../Styles/LoggedNavBar.module.css";

// import images
import logo from "../../assets/Images/MFLogo.svg";

function LoggedNavBar() {
  return (
    <nav className={styles.mainLoggedNavBar}>
      <a href="/view-account">
        <img src={logo} alt="MF Bank logo" />
      </a>
    </nav>
  );
}

export default LoggedNavBar;
