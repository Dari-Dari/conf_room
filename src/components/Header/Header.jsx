import styles from "./Header.module.scss";
import logo from "/public/logo.png";

const Header = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img className={styles.header_logo} src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
