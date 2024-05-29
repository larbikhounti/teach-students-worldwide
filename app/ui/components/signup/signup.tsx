import Link from "next/link";
import styles from "./signup.module.scss"

import { robotoBold } from '@/app/ui/fonts';

export default function Signup() {
  return (
    <div className={`${styles.signup} ${robotoBold.className}`}>
        <Link className={styles.link} href="/signup" >Sign Up Now</Link>
    </div>
  );
}
