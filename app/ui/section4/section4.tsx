import styles from "./section4.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import Plan from "../components/plan/plan";
import StaticCard from "../components/statics/statiCard";
export default function SectionFour() {
  return (
    <div className={styles.main}>
      <StaticCard title="195" description="user countries" alt="user countries" icon="./section4/heart.svg"/>
      <StaticCard title="1M" description="valued teachers" alt="valued teachers" icon="./section4/gem.svg"/>
      <StaticCard title="17M" description="happy students" alt="happy students" icon="./section4/gratuation-hat.svg"/>
    </div>
  );
}
