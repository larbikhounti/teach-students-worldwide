
import styles from "./signup.module.scss"

import { robotoBold } from '@/app/ui/fonts';
type planTypes   = {
  label : String,
  title : String,
  description : String

}
export default function Plan({label,title,description} : planTypes) {
  return (
    <div>
        Sign Up Now
    </div>
  );
}
