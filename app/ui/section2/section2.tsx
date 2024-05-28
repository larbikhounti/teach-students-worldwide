import styles from "./section2.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Plan from "../components/plan/plan";
export default function SectionTwo() {
  return (
    <div className={styles.main}>

      <div className={styles.left_side}>
      <h1 className={`${styles.title}  ${robotoExtraBold.className}`}>An all-in-one app<br/> that makes it easier</h1>
        <ul className={styles.unordered_list}>
         <li className={`${styles.phrase}  ${robotoRegular.className}`}><Image className={styles.check_mark} alt="check mark" src="./section2/check-mark.svg" width={33} height={9.07} />Est et in pharetra magna adipiscing ornare aliquam.</li>
         <li className={`${styles.phrase}  ${robotoRegular.className}`} ><Image className={styles.check_mark} alt="check mark" src="./section2/check-mark.svg" width={33} height={9.07} />Tellus arcu sed consequat ac velit ut eu blandit.</li>
         <li className={`${styles.phrase}  ${robotoRegular.className}`} ><Image className={styles.check_mark} alt="check mark" src="./section2/check-mark.svg" width={33} height={9.07} />Ullamcorper ornare in et egestas dolor orci.</li>
        </ul>
      <div className={styles.call_action}>
        <Link className={styles.action_phrase} href="#">Find more about the app </Link>
        <Image alt="right arrow" src="./section2/right-arrow.svg" width={14} height={13.31} />
      </div>
     
      </div>

      <div className={styles.right_side}>
        <Image className={styles.babble} alt="babble" src="./section2/babble.svg"   width={506.18} height={448.01}  />
        <Image className={styles.video} alt="video" src="./section2/video.svg" width={600} height={391} />
        <div className={styles.plan_cards}>
              <Plan color="#6B21A8"  Labelcolor="#F3E8FF" label="Featured" title="The map of mathematics" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <Plan color="#1E40AF" Labelcolor="#DBEAFE" label="Popular" title="Design for how people think" description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. " />
              <Plan color="#166534" Labelcolor="#DCFCE7" label="New" title="International & commercial law" description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. " />
        </div>
        
      </div>
    </div>
  );
}
