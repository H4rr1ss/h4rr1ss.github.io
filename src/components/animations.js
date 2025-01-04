import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".tit1e");
  if (text) {
    const textString = text.textContent || "";
    const split = textString.split("");
    text.textContent = "";

    for (let i = 0; i < split.length; i++) {
      text.innerHTML += `<span class="text-[#41fc00]">${split[i]}</span>`;
    }

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    t1.from("span", {
      y: 100,
      opacity: 0,
      stagger: {
        amount: 2,
      },
    });
  }
});
