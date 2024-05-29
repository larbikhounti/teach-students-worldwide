
import Link from "next/link";
import styles from "./actions.module.scss";

export default function Actions() {
  return (
    <div className={styles.actions}>
        <Link className={styles.login} href='#'> Log In</Link>
        <Link className={styles.signup} href='/signup'> Sign Up Now</Link>
  
    </div>
  );
}

