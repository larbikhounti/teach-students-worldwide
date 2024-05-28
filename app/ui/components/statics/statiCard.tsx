import Image from "next/image";
import styles from "./statiCard.module.scss"
import {robotoExtraBold, robotoRegular } from '@/app/ui/fonts';

export default function StaticCard({
  icon,
  title,
  description,
  alt
  } : {
    icon : String,
    title : String,
    description : String,
    alt : String
  }
  ) {
  return (
    <div className={`${styles.card}`}>
      <Image  alt={alt.toString()} src={icon.toString()} width={64} height={64} />
      <h1 className={`${styles.title} ${robotoExtraBold.className}`}>{title}</h1>
      <p className={`${styles.description} ${robotoRegular.className}`}>{description}</p>
    </div>
  );
}
