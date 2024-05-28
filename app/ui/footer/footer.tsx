import styles from "./footer.module.scss";
import Image from "next/image";
import General from "../components/general/general";
export default function Footer() {

  const links =[
    {
      category : "Product",
      subCategories : [{sub : "Pricing", beta: true}, {sub : "Overview", beta: false}, {sub : "Browse", beta: false}, {sub : "Accessibility", beta: false}]
      
    },
    {
      category : "Solutions",
      subCategories : [{sub : "Brainstorming ", beta: false}, {sub : "Ideation", beta: false}, { sub : "Wireframing", beta: false} , {sub : "Research", beta: false}],
       
    },
    {
      category : "Resources",
      subCategories : [{sub : "Help Center", beta: false} , {sub : "Blog", beta: false}, {sub  : "Tutorials", beta: true},  {sub : "FAQs", beta: false}],
       
    },
    {
      category : "Support",
      subCategories : [{sub : "Contact Us", beta: true},  {sub : "Developers", beta: false},  {sub : "Documentation ", beta: false}, {sub : "Integrations", beta: false }],
      
    },
    {
      category : "Company",
      subCategories : [{sub : "About", beta: false}, {sub  : "Press", beta: false}, {sub  : "Events", beta: false}, {sub : "Request Demo", beta: false }]
    }
  ]
  return (
    <div className={styles.main}>
      <div><Image alt="Logo colored" src="./colored-logo-end.svg" width={172} height={35} /></div>
      {links.map(cat=>
        <General key={cat.category}
        category={cat.category}
        subcategries={cat.subCategories} />)
      }
    </div>
  );
}
