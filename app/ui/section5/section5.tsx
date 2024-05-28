import styles from "./section5.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Signup from "../components/signup/signup";
export default function SectionFive() {
  return (
    <div className={styles.main}>
      <Image className={styles.people_image} alt="back ground yellow this group of people faces"  src="./section5/section5.svg" fill={true}  />
      <h1 className={`${styles.title} ${robotoExtraBold.className}`}>Join a world of learning</h1>
      <p className={`${styles.description} ${robotoRegular.className}`}>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br/> Risus elit et fringilla habitant ut facilisi.</p>
      <Signup/>
    </div>
  );
}
