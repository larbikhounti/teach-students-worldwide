'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { robotoBold } from "../ui/fonts";
import Input from "../ui/components/inputs/input";
import Signup from "../ui/components/signup/signup";

export default function Home() {
    function signin(form:any) {
        console.log("form")
    }
  return (
    <main className={styles.main}>
        <Image  className={styles.img} alt="students" width={984} height={800} src="/signin/sea.png" />
        <div className={styles.form}>    
            <Image alt="logo colored" src="/logo-colored.svg" width={103} height={35}/>
            <h1 className={`${styles.title} ${robotoBold.className} `} >happy to see you here</h1>
            <form  action={signin}>
                <Input label="Full name" type="text"  />
                <Input label="Email" type="email"  />
                <Input label="Password" type="password"  />
                <Signup/>
            </form>
        </div>
    </main>

  );
}
