import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap'


import Animations from './Animations'
import SmoothScroll from './SmoothScroll'


gsap.registerPlugin(ScrollTrigger);

console.log("gsap", ScrollTrigger.version)
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
// scrollTrigger: {
//     trigger: ".container"
// }
});

