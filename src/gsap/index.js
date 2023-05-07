import { gsap } from "gsap";
const PresentacionInicial = (animacion,title,subtitle)=>{
       // Deshabilita el scroll de la página
       document.body.classList.add("no-scroll");

    
       const tl = gsap.timeline();
       tl.to(animacion.current, { width: "0%", duration: 2, ease: "expo.inOut", delay: 2.4 })
         .set(animacion.current, { display: "none" })
         .eventCallback("onComplete", () => {
           // Habilita el scroll de la página
           document.body.classList.remove("no-scroll");
       });
   
       tl.fromTo(
         title.current,
         { x: "-20%", opacity:0},
         { x: 0, duration: 1, ease: "power2.out", opacity:1},
         0.5 // Delay antes de iniciar la animación
       )
   
       tl.fromTo(
         subtitle.current,
         { x: "20%", opacity:0},
         { x: 0, duration: 1, ease: "power2.out", opacity:1},
         1.1 // Delay antes de iniciar la animación
       );
}

export default PresentacionInicial