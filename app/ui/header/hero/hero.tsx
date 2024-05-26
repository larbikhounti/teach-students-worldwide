import Signup from "../../components/signup/signup";
import styles from "./hero.module.scss";
import { robotoRegular, robotoBold } from "@/app/ui/fonts";
import Image from "next/image";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.left_section}>
      <Image className={styles.underline} alt="underline" src="./underline.svg" width={200} height={25} />
        <div className={`${styles.main_title} ${robotoBold.className}`}>
         Teach students worldwide
        </div>
        <div className={`${styles.sub_text} ${robotoRegular.className}`}>
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </div>
        <div className={`${styles.hero_action} `}>
          <Signup />
          <div className={`${styles.play_button} `}>
            <Image alt="play button" src="./play.svg" width={20} height={20} />
            View Demo
          </div>
        </div>
        <div className={styles.trusted_companies}>
            <div className={`${styles.title} ${robotoRegular.className}`}>Trusted by<br/> leading companies </div>
            <Image
              alt="presonation of the advantage"
              src="./trustedCompanies/company1.svg"
              width={25.21}
              height={32}
            />
             <Image
              alt="presonation of the advantage"
              src="./trustedCompanies/company2.svg"
              width={25.21}
              height={32}
            />
             <Image
              alt="presonation of the advantage"
              src="./trustedCompanies/company3.svg"
              width={25.21}
              height={32}
            />
             <Image
              alt="presonation of the advantage"
              src="./trustedCompanies/company4.svg"
              width={25.21}
              height={32}
            />
             <Image
              alt="presonation of the advantage"
              src="./trustedCompanies/company5.svg"
              width={25.21}
              height={32}
            />
          </div>

      </div>

      <div className={styles.right_section}>
        <Image
          alt="presonation of the advantage"
          src="./right-hero.svg"
          width={624.6}
          height={544.53}
        />
      </div>
    </div>
  );
}
