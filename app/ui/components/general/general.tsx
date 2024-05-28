
import styles from "./general.module.scss"

import { robotoBold, robotoRegular, robotoThin } from '@/app/ui/fonts';

export default function General({category,subcategries} : {
  category : String,
  subcategries : string[],
}) {
  
  return (
    <ul className={styles.general}>
      <h5 className={`${styles.category} ${robotoBold.className}`}>{category}</h5>
      {subcategries.map(sub=> <li  key={sub} className={`${styles.subcategory} ${robotoThin.className}`}>{sub}</li>)}
    </ul>
  );
}
