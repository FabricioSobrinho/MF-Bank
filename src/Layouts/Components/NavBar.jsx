// import navbar styles
import styles from "../../Styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.mainNavBar}>
      <div className={styles.leftNavBar}>Logo MF Bank</div>
      <div className={styles.rightNavBar}>
        <button>Acessar conta</button>
      </div>
    </nav>
  );
}

export default NavBar;
