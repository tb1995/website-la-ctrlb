import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function discoverClick() {
  alert("yipeekaiyay motherfucker")
}


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

    gsap.to(sections, {
      xPercent: -100 * (5 - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (5 - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });

  }
})
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });


// tl.to(".luxor", {
//     scrollTrigger: {
//         trigger: '.luxor',
//         start: "center center"
//     },
//     backgroundColor: "maroon",
//     delay: 1
    
// })

