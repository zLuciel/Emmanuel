import Head from "next/head";
//import Image from 'next/image'
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Presentacion from "@/components/MainHome/Presentacion";
import Portafolio from "@/components/Portafolio/Portafolio";
import About from "@/components/About/About";
import { Certificado } from "@/components/Certificado/Certificado";
import Trabajo from "@/components/Trabajo/Trabajo";
import Skill from "@/components/Skill/Skill";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={`${styles.fixedBg}`}>
        <span>Emmanuel Abregú</span>{" "}
      </div>
      <Head>
        <title>Emmanuel Abregú</title>
        <meta name="description" content="Desarrollador full stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main >
       <Presentacion />
        
        <About />
        <Trabajo />
        <Skill/><Portafolio />
      </main>
    </>
  );
}
