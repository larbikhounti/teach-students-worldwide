import styles from "./section6.module.scss";
import { robotoRegular, robotoExtraBold } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import General from "../components/general/general";
export default function SectionSix() {

  const links =[
    {
      category : "Product",
      subCategories : ["Pricing", "Overview", "Browse", "Accessibility"]
    },
    {
      category : "Solutions",
      subCategories : ["Brainstorming", "Ideation", "Wireframing", "Research"]
    },
    {
      category : "Resources",
      subCategories : ["Help Center", "Blog", "Tutorials", "FAQs"]
    },
    {
      category : "Support",
      subCategories : ["Contact Us", "Developers", "Documentation", "Integrations"]
    },
    {
      category : "Company",
      subCategories : ["About", "Press", "Events", "Request Demo"]
    }
  ]
  return (
    <div className={styles.main}>
      <div><Image alt="Logo colored" src="./colored-logo-end.svg" width={172} height={35} /></div>
      {links.map(cat=> <General key={cat.category} category={cat.category} subcategries={cat.subCategories} />)}
    </div>
  );
}
