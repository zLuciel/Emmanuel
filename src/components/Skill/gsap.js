import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SkillAnimate = (SkillRef,CardRefChildre,descriptionRef)=>{
    gsap.registerPlugin(ScrollTrigger);
    const children = CardRefChildre.current.children;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SkillRef.current,
        start: "top 80%", //50 sin scroll o 150 con
        end: "bottom 60%",
        //scrub: true,///HACE LA ANIMACION DEFRENTE SIN SCROLL
       // once: true,//SOLO UNA VEZ
      },
    });
    tl.fromTo(
      descriptionRef.current,
      { 
        x: -550,
        opacity: 0,
      },
      {
        duration: 1,
        x: 0,
        opacity: 1,
       // ease: "power3.out",
      },
      "-=1.5"
    )
    
    .fromTo(children, {
      opacity: 0,
      x: 50,
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: children,
        start: "top 150%",
        once: true,
      },
    });
}