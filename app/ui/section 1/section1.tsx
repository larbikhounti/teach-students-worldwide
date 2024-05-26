import styles from "./section1.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
export default function SectionOne() {
  return (
    <div className={styles.main}>
      <h1 className={`${styles.title} ${robotoExtraBold.className}`}>
        All the tools that you need
      </h1>
      <p className={`${styles.description} ${robotoRegular.className}`}>
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
        suspendisse nec lorem mauris.
        <br />
        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
      </p>
      <Image
        alt="desktop"
        src="./section1/Desktop.svg"
        width={1100}
        height={640}
      />
      <div className={styles.tools}>
      <Image
        alt="desktop"
        src="./section1/tools/App-one.svg"
        width={64}
        height={64}
      />
       <Image
        alt="desktop"
        src="./section1/tools/app-two.svg"
        width={64}
        height={64}
      />
        <Image
        alt="desktop"
        src="./section1/tools/app-three.svg"
        width={64}
        height={64}
      />
        <Image
        alt="desktop"
        src="./section1/tools/app-four.svg"
        width={64}
        height={64}
      />
        <Image
        alt="desktop"
        src="./section1/tools/App-five.svg"
        width={64}
        height={64}
      />
        <Image
        alt="desktop"
        src="./section1/tools/app-six.svg"
        width={64}
        height={64}
      />
        <Image
        alt="desktop"
        src="./section1/tools/app-seven.svg"
        width={64}
        height={64}
      />
      </div>
    </div>
  );
}
