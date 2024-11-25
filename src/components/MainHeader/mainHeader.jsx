import NotificationIcon from "../../CustomIcons/NotificationIcon";
import Container from "../Container/container";
import styles from "./mainHeader.module.css";
import SearchInput from "./SearchInput/searchInput";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <img className={styles.logo} src="/logo.png" />
          <ul>
            <li className={styles.active}>Home</li>
            <li>Dashboard</li>
            <li>Settings</li>
          </ul>
          <div className={styles.actions}>
            <SearchInput />
            <button className={styles.notificationBtn}>
              <div className={styles.dot}></div>
              <NotificationIcon />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
