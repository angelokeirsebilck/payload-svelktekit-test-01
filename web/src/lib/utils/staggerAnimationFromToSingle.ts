import { gsap } from "gsap";
const staggerAnimationFromToSingle = (parent: HTMLElement) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent,
      start: "top 80%",
      toggleActions: "play pause resume reverse",
      // markers: true,
    },
  });

  tl.fromTo(
    parent,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );
};
export { staggerAnimationFromToSingle };
