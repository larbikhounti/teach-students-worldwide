

import styles from "./input.module.scss"

import { robotoBold, robotoRegular, robotoThin } from '@/app/ui/fonts';

export default function Input({label,placeholder,type } : {
  label : string,
  placeholder? : string,
  type : string,
}) {
  
  return (
    <div className={styles.input_group}>
     <label  className={`${styles.label} ${robotoRegular.className}`} htmlFor="input">{label}</label>
     <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
}
