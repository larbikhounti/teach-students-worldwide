
import styles from "./general.module.scss"

import { robotoBold, robotoRegular, robotoThin } from '@/app/ui/fonts';
interface subbETA  {sub : string, beta : boolean}

export default function General({category, subcategries  } : {
  category : string,
  subcategries : subbETA[],
}) {
  function itBeta(itIs : boolean) {
    return itIs ? <div className={`${styles.beta} ${robotoThin.className}`}>beta</div> : ""
  }
  
  return (
    <ul className={styles.general}>
      <h5 className={`${styles.category} ${robotoBold.className}`}>{category}</h5>
      {subcategries.map(sub=> <li  key={sub.sub} className={`${styles.subcategory} ${robotoThin.className}`}>{sub.sub} {itBeta(sub.beta)}</li>)}
    </ul>
  );
}
