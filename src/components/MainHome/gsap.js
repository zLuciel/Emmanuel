import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export const MainAnimate = (TextCenter)=>{   
      gsap.registerPlugin();
      gsap.fromTo(
        TextCenter.current,
        { y: 100, opacity: 0 },
        { duration: 1, y: 0, opacity: 1 ,delay:3.5}
      );
  
}

export const SectionAnimate = (colum1,colum2,containerCard)=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerCard.current,
        start: "center bottom",
        once: true,
      }
    });
  
    tl.fromTo(
      [colum1.current, colum2.current],
      { x: -100,opacity:0 },
      {
        duration: 1,
        opacity: 1,
        x: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "expo.out",
      }
    );
}
