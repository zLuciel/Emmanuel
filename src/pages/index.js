import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Presentacion from "@/components/MainHome/Presentacion";
import Portafolio from "@/components/Portafolio/Portafolio";
import About from "@/components/About/About";
import Trabajo from "@/components/Trabajo/Trabajo";
import Skill from "@/components/Skill/Skill";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Hamburger from "@/components/Hamburger/Hamburger";
import { useEffect, useRef } from "react";

import PresentacionInicial from "@/gsap";
import useWidthPage from "@/Hooks/useWidthPage";

export default function Home() {
  const animacion = useRef(null);
  const title = useRef(null);
  const subtitle = useRef(null);
  const [widthPage] = useWidthPage(875)

  useEffect(() => {
    PresentacionInicial(animacion, title, subtitle);
  }, []);

  return (
    <>
      <div ref={animacion} className={`${styles.animacionStart}`}>
        <div className={`${styles.animacionStartCenter}`}>
          <h1 ref={title}>Emmanuel</h1>
          <p ref={subtitle}>Developer</p>
        </div>
      </div>

      <div className={`${styles.fixedBg}`}></div>
      <div className={`${styles.contentimg}`}>Emmanuel Abregú</div>
      <Head>
        <title>Emmanuel Abregú</title>
        <meta name="description" content="Desarrollador full stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { widthPage && <Hamburger />}
      <Header />
      <main>
        <Presentacion />
        <div className={`${styles.containerbg2}`}>
          <div className={`${styles.bg2}`}></div>
          <About />
          <Portafolio />
          <Trabajo />
          <Skill />
          <Form />
        </div>
      </main>
      {/* <Footer />*/}
    </>
  );
}
