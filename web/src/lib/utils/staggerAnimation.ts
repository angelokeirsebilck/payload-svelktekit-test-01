import { gsap } from "gsap";
const staggerAnimation = (parent: HTMLElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "top 80%",
      toggleActions: "play pause resume reverse",
      //   markers: true,
    },
  });

  tl.from(parent.children, {
    y: 20,
    stagger: 0.2,
    opacity: 0,
  });
};
export { staggerAnimation };
