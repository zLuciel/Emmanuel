import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const PortafolioAnimate = (
  containerRef,
  titleRef,
  descriptionRef,
  imageRef,
  cardivRef
) => {
  gsap.registerPlugin(ScrollTrigger);

  const children = cardivRef.current.children;

  // Timeline principal
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 50%",
      // end: "bottom 100%",
      // scrub: true,
    },
  });

  tl.fromTo(
    titleRef.current,
    {
      opacity: 0,
      x: -850,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
    },
    "-=0.5"
  ).fromTo(
    descriptionRef.current,
    {
      x: -550,
      opacity: 0,
    },
    {
      duration: 1,
      x: 0,
      opacity: 1,
    },
    "-=0.8"
  );
  tl.fromTo(
    imageRef.current,
    {
      //x: "-100px",
     // opacity: 0,
      width: 0,
    },
    {
     // x:"0",
     // opacity: 1,
      width: "100%",
      duration: 1.5,
      ease: "expo.inOut",
    },
    "-=0.5"
  );
  tl.fromTo(
    children,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0,
    }
  );
};
