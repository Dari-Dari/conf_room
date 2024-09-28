import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img className={styles.header_logo} src="/logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
