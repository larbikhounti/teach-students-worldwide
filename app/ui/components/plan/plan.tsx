
import styles from "./plan.module.scss"

import { robotoBold, robotoRegular } from '@/app/ui/fonts';

export default function Plan({label,title,description,Labelcolor,color} : {
  label : String,
  title : String,
  description : String,
  Labelcolor : String,
  color : String

}) {
  
  return (
    <div className={styles.plan}>
      <div className={`${styles.plan_label} ${robotoRegular.className}`} style={{backgroundColor:Labelcolor.toString(),color:color.toString()}}>{label}</div>
      <h1 className={`${styles.plan_title} ${robotoRegular.className}`} >{title}</h1>
      <p className={`${styles.plan_description} ${robotoRegular.className}`} >{description}</p>
      <div className={`${styles.plan_action} ${robotoRegular.className}`}>Take Lesson</div>
    </div>
  );
}
