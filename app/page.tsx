import styles from "./page.module.scss";
import NavBar from "./ui/header/navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
    </main>
  );
}
