
import styles from "./menu.module.scss";
import Image from "next/image";
import { robotoRegular } from '@/app/ui/fonts';
import Link from "next/link";
export default function Menu() {
  return (
    <div className={styles.menu}>
        <Link href="/"><Image className={styles.logo} alt="logo" src="/Logo-colored.svg" height={35} width={103} /></Link>
        <ul className={`${styles.menu_links} ${robotoRegular.className}`}>
            <li>Products</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li className={styles.dropdown} >Resources  <Image className={styles.down_arrow} alt="down arrow" src="/down-arrow.svg" height={7} width={13} /></li>
        </ul>
        
    </div>
  );
}

