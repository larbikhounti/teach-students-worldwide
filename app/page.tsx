import styles from "./page.module.scss";
import Hero from "./ui/header/hero/hero";
import NavBar from "./ui/header/navbar/navbar";
import SectionOne from "./ui/section 1/section1";
import SectionTwo from "./ui/section2/section2";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
    </main>

  );
}
