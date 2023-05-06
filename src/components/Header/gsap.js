import { gsap } from "gsap";

const HeaderGsap = (nav, nav1, nav2, nav3, nav4) => {
  const tl = gsap.timeline();
  tl.set(
    [nav.current, nav1.current, nav2.current, nav3.current, nav4.current],
    { opacity: 0 }
  ) // establecer opacidad inicial en 0
    .fromTo(
      [nav.current, nav1.current, nav2.current, nav3.current, nav4.current],
      { y: -100 },
      {
        delay: 1,
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.8,
        },
        ease: "expo.out",
      }
    );
};
export default HeaderGsap;
