import styles from "./section3.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Plan from "../components/plan/plan";
export default function SectionThree() {
  return (
    <div className={styles.main}>
      <div className={styles.left_side}>
        <div className={styles.column_images}>
          <Image  className={styles.first_image} alt="girl hand up" src="./section3/girl-hand-up.svg" width={128} height={192} />
          <Image alt="green guy standing" src="./section3/standing-guy-green-shirt.svg" width={172} height={258}/></div>
        <div className={styles.column_images}>
          <Image alt="girl in purple hodie writing" src="./section3/girl-purple-hodie.svg" width={128} height={212}/>
          <Image alt="two girls standing " src="./section3/two-girls-standing.svg" width={128} height={215}/>
          <Image alt="black guy writing " src="./section3/black-guy-writing.svg" width={128} height={160}/></div>
        <div className={styles.column_images}>
          <Image alt="student graduating  " src="./section3/student-graduating.svg" width={128} height={171}/>
          <Image alt="girl thinking " src="./section3/girl-thinking.svg" width={128} height={172} />
          <Image alt="guy watching " src="./section3/man-watching.svg" width={128} height={192} /></div>
        <div className={styles.column_images}>
          <Image alt="girl curly hair" src="./section3/girl-curley-hair.svg" width={160} height={255}/>
          <Image alt="hijabi girl" src="./section3/hijabi-girl.svg" width={128} height={165}/>
          </div>
      </div>

      <div className={styles.right_side}>
      <h1>Meet international students & teachers</h1>
        <p>Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
        <div className={styles.call_action}>
        <Link className={styles.action_phrase} href="#">Find more about the app </Link>
        <Image alt="right arrow" src="./section2/right-arrow.svg" width={14} height={13.31} />
      </div>
      </div>
    </div>
  );
}
