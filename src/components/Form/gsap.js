import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FormAnimate = (
  containerRef,
  titleRef,
  descriptionRef,
  CardChildren,
  imgRef
) => {
  gsap.registerPlugin(ScrollTrigger);
  const children = CardChildren.current.children;
  gsap.fromTo(
    [titleRef.current, descriptionRef.current],
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    }
  );

  gsap.fromTo(
    imgRef.current,
    { y: 100, opacity: 0 },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: " center bottom",
        once: true,
      },
    }
  );

  gsap.fromTo(
    children,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom",
        once: true,
      },
    }
  );
};
