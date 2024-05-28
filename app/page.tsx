import styles from "./page.module.scss";
import Hero from "./ui/header/hero/hero";
import SectionOne from "./ui/section 1/section1";
import SectionTwo from "./ui/section2/section2";
import SectionThree from "./ui/section3/section3";
import SectionFour from "./ui/section4/section4";
import SectionFive from "./ui/section5/section5";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </main>

  );
}
