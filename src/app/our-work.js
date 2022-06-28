import gsap from 'gsap'
import $, { event } from 'jquery'
import ScrollTrigger from 'gsap/ScrollTrigger'


var zoneomicsPanel = document.getElementById("zoneomics-panel");
var goldstarPanel = document.getElementById("goldstar-panel");
var luxorPanel = document.getElementById("luxor-panel");
var lorenPanel = document.getElementById("loren-panel");
var nuagePanel = document.getElementById("nuage-panel");
var container = document.getElementById("container")

function discoverClick() {
  alert("yipeekaiyay motherfucker")
}

// $(document).ready(function() {
         

//    $('#goldstar-circle').on('click', function() {
//      console.log("test")
//     //  event.preventDefault();
//       // $('.container').animate({scrollLeft: $('#goldstar-panel').position().left}, 1500);
//     //   $('.container').animate({
//     //     scrollLeft: $("#goldstar-panel").offset().left
//     // }, 2000);
    

//    $('window').animate({scrollTop: $('#luxor-panel').position().top}, 1500);
//     // document.getElementById('container').scrollTop += 500;
//     // $(".container")[0].scrollTo(500, 800);
//    })
  

// })

$(document).ready(function () {

    // alert("test")
        var $horizontal = $('#goldstar-panel');
        var startPosition = $horizontal.position().left;
    var speed = 14;

     $(window).scroll(function () {
        var st = $(this).scrollTop();
        var newPos = (st * (speed/100)) + startPosition;
        $horizontal.css({
            'left': newPos
        });
    });
})


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
        // snap: 1 / (5 - 1),
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

