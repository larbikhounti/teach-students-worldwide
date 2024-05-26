import styles from "./signup.module.scss"

import { robotoBold } from '@/app/ui/fonts';

export default function Signup() {
  return (
    <div className={`${styles.signup} ${robotoBold.className}`}>
        Sign Up Now
    </div>
  );
}
