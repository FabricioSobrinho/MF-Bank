// import navbar styles
import styles from "../../Styles/NavBar.module.css";

// import components
import InputButton from "../FormsComponents/InputButton";

function NavBar() {
  return (
    <nav className={styles.mainNavBar}>
      <div className={styles.leftNavBar}>
        <a href="/">Logo MF Bank</a>
      </div>
      <div className={styles.rightNavBar}>
        <InputButton
          text={"Criar Conta"}
          widthButton={20}
          heightButton={5}
          route={"/create-acc"}
        />
      </div>
    </nav>
  );
}

export default NavBar;
