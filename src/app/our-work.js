import gsap from 'gsap'
import $, { event } from 'jquery'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'


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
gsap.registerPlugin(ScrollToPlugin);

let scrollWidth;
function createScroller() {
  scrollWidth = container.offsetWidth - innerWidth;
  ScrollTrigger.addEventListener("refreshInit", () => {
    scrollWidth = container.offsetWidth - innerWidth;
    gsap.set(document.body, {height: scrollWidth + innerHeight});
  });
}

createScroller();
var triggerAmount = 0;



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
        onUpdate: trigger => triggerAmount = trigger.progress
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



let scroll_to = 0;
let maxScrollerWidth = container.offsetWidth - innerWidth;


function slideAnim(e) {
  console.log("test")
  e.preventDefault();
  
  // NAVIGATION BUTTONS. 
  // Should move by +/- three sections
  
  // First, check to see if we've used the mousewheel
  // If we have, then we need to update the scroll_to position
  // so it matches how far we might have moved with scroll trigger
  // multiply that by total moveable width to get approximate px width
  // we can then add or subtract that from scroll_to
  triggerMoved = Math.floor(triggerAmount * scrollWidth);
  
  // NEXT
  if( $(this).hasClass("navi--next") ){
    // console.log(" triggerMoved: " + triggerMoved)
    // console.log(" triggerAmount: " + triggerAmount)
    // console.log(" maxScrollerWidth: " + maxScrollerWidth)
    console.log(" innerWidth: " + innerWidth)
    // console.log(" : " + )
    // console.log(" : " + )

    
    // check to see if we can move three sections forward (right)
    if ((scroll_to + innerWidth) < maxScrollerWidth) {
      
      // scroll_to + screen width is less than overall moveable width
      // so lets set scroll_to = trigger position + screenwidth
      scroll_to = innerWidth / 2;
      console.log("here")
      
    } else {
      
      // scroll_to + screen width is more than overall moveable width
      // so we can just go to right to the end
      // scroll_to = maxScrollerWidth;
            scroll_to = innerWidth / 8;

            console.log("or here")

    }
    
  }

   nav_tl = gsap.timeline();
  
  nav_tl.to(window, {
    duration: 0.05, 
    // ease:"power4.out",
    scrollTo: scroll_to
  });
}

document.querySelector(".navi--next").addEventListener("click", slideAnim);