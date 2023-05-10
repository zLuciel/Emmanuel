import { gsap } from "gsap";

export const HandleHamburguer = (setVisible,hamburger,visible) => {
    const element = hamburger.current;
    const tl = gsap.timeline();
    if (element.style.display === "block") {
      tl.to(element, {
        opacity: 0,
        display: "none",
        width: 0,
        height: 0,
        margin: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      tl.fromTo(
        element,
        { opacity: 0, display: "none", width: 0, height: 0, margin: 0 },
        {
          opacity: 1,
          display: "block",
          width: "100%",
          height: "100vh",
          margin: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }
    setVisible(!visible);
  };
 