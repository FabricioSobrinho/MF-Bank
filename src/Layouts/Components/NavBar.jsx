// import navbar styles
import styles from "../../Styles/NavBar.module.css";

// import components
import InputButton from "../FormsComponents/InputButton";

// import images
import logo from "../../assets/Images/MFLogo.svg";

function NavBar() {
  return (
    <nav className={styles.mainNavBar}>
      <div className={styles.leftNavBar}>
        <a href="/">
          <img src={logo} alt="MF Bank logo" />
        </a>
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
