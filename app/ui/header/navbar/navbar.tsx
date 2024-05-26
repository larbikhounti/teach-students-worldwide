
import Actions from "./actions/actions";
import Menu from "./menu/menu";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <Menu/>
        <Actions/>
    </div>
  );
}

