import gsap from 'gsap'
import $, { event } from 'jquery'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import CSSRulePlugin from 'gsap/CSSRulePlugin'


var zoneomicsPanel = document.getElementById("zoneomics-panel");
var goldstarPanel = document.getElementById("goldstar-panel");
var luxorPanel = document.getElementById("luxor-panel");
var lorenPanel = document.getElementById("loren-panel");
var nuagePanel = document.getElementById("nuage-panel");
var container = document.getElementById("container")

function discoverClick() {
  alert("yipeekaiyay motherfucker")
}
window.addEventListener('scroll', function(){
  console.log(scrollY)
})

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
gsap.registerPlugin(CSSRulePlugin);


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
let desktopSections = gsap.utils.toArray(".desktop");

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

    let scrollTween = gsap.to(sections, {
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

    let scrollTriggerTimeline = gsap.timeline();
    desktopSections.forEach((sct, i) => {
      
      console.log(sct.childNodes[3].childNodes[1].classList)
  
  let imageWrapperArray = [];
  imageWrapperArray[0] = sct.childNodes[1].childNodes[3].childNodes[1].classList[0]
  imageWrapperArray[1] = sct.childNodes[1].childNodes[3].childNodes[1].classList[1]
  let imageWrapper;
  let indexOfImageWrapper = imageWrapperArray.indexOf("image-wrapper")
  if(indexOfImageWrapper === 0) {
    imageWrapper = "."+sct.childNodes[1].childNodes[3].childNodes[1].classList[1];
  } else {
    imageWrapper = "."+sct.childNodes[1].childNodes[3].childNodes[1].classList[0];
  }
  // let imageWrapper = "."+sct.childNodes[1].childNodes[3].childNodes[1].classList[1];
  // console.log(typeof(sct.childNodes[3].childNodes[1].classList[0]))
    let roundButtonArray = [];
    roundButtonArray[0] = sct.childNodes[3].childNodes[1].classList[0]
    roundButtonArray[1] = sct.childNodes[3].childNodes[1].classList[1]

  let roundButton
  let indexOfRoundButton = roundButtonArray.indexOf("round-button")
  if(indexOfRoundButton === 0) {
    roundButton = "."+sct.childNodes[3].childNodes[1].classList[1]
  } else {
    roundButton = "."+sct.childNodes[3].childNodes[1].classList[0]
  }

  // gsap.set(roundButton, {
  //   opacity: 0.0
  //   // delay: -4
  // })
  // let roundButton = "."+sct.childNodes[3].childNodes[1].classList[0]
  // console.log("index of round button: " + indexOfRoundButton)
  let miniImageArray = []
  miniImageArray[0] = sct.childNodes[1].childNodes[5].classList[0]
  miniImageArray[1] = sct.childNodes[1].childNodes[5].classList[1]
  let miniImage;
  let indexOfMiniImage = miniImageArray.indexOf("mini")
  if(indexOfMiniImage === 0) {
    miniImage = "."+sct.childNodes[1].childNodes[5].classList[1]
  } else {
    miniImage = "."+sct.childNodes[1].childNodes[5].classList[0]
  }
  // let miniImage = "."+sct.childNodes[1].childNodes[5].classList[1]

  let descriptionArray = [];
  descriptionArray[0] = sct.childNodes[3].childNodes[3].classList[0]
  descriptionArray[1] = sct.childNodes[3].childNodes[3].classList[1]
  let description;
  let indexOfDescription = descriptionArray.indexOf("description")
  if(indexOfDescription === 0) {
    description = "."+sct.childNodes[3].childNodes[3].classList[1]
  } else {
     description = "."+sct.childNodes[3].childNodes[3].classList[0]
  }
  // let description = "."+sct.childNodes[3].childNodes[3].classList[1]


  let visitLinkArray = [];
  visitLinkArray[0] = sct.childNodes[3].childNodes[5].classList[0]
  visitLinkArray[1] = sct.childNodes[3].childNodes[5].classList[1]
  let visitLink;
  let indexOfVisitLink = visitLinkArray.indexOf("visit-link")
  if(indexOfVisitLink === 0) {
    visitLink = "."+sct.childNodes[3].childNodes[5].classList[1]
  } else {
    visitLink = "."+sct.childNodes[3].childNodes[5].classList[0]
  }

  // let visitLink = "."+sct.childNodes[3].childNodes[5].classList[1]

  let selectorArray = [];
  selectorArray[0] = sct.childNodes[3].childNodes[7].classList[0]
  selectorArray[1] = sct.childNodes[3].childNodes[7].classList[1]
  let selector;
  let indexOfSelector = selectorArray.indexOf("selector")
  if(indexOfSelector === 0) {
    selector = "."+sct.childNodes[3].childNodes[7].classList[1]
  } else {
    selector = "."+sct.childNodes[3].childNodes[7].classList[0]
  }

  // let selector = "."+sct.childNodes[3].childNodes[7].classList[1]
    let sectionHeadingArray = []
    sectionHeadingArray[0] = sct.childNodes[1].childNodes[1].classList[0]
    sectionHeadingArray[1] = sct.childNodes[1].childNodes[1].classList[1]
    let sectionHeading;
    let indexOfSectionHeading = sectionHeadingArray.indexOf("section-heading")
    if(indexOfSectionHeading === 0) {
        sectionHeading = "." + sct.childNodes[1].childNodes[1].classList[1]
    } else {
        sectionHeading = "." + sct.childNodes[1].childNodes[1].classList[0]
    }
    // let sectionHeading = "." + sct.childNodes[1].childNodes[1].classList[1]



  let rule = CSSRulePlugin.getRule(imageWrapper+"::after");
  gsap.to(rule, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  cssRule:  {height: "0%"},
  ease: "power2.inOut",
  duration: 1.8,
  delay: 0.5
  })

  gsap.from(imageWrapper, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  scale: 1.6,
  ease: "power2.inOut",
  duration: 2.8,
  delay: 0.5
  }) 

  gsap.to(roundButton, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 0.99,
  ease: "power2.inOut",
  duration: 1.0,
  delay: -1
  }) 

gsap.from(roundButton, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  scale: 0.0,
  ease: "power2.inOut",
  duration: 3.8,
  delay: 0.5
  }) 

  gsap.to(sectionHeading, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 1.0,
  ease: "power2.inOut",
  duration: 2.0,
  delay: 2
  }) 

  gsap.to(description, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 1.0,
  ease: "power2.inOut",
  duration: 2.0,
  delay: 2.3
  }) 

  gsap.to(visitLink, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 1.0,
  ease: "power2.inOut",
  duration: 2.0,
  delay: 3.3
  }) 

  gsap.to(selector, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 1.0,
  ease: "power2.inOut",
  duration: 2.0,
  delay: 4.3
  }) 

  gsap.to(miniImage, {
    scrollTrigger: {
    trigger: sct,
    containerAnimation: scrollTween
    
  },
  opacity: 0.99,
  ease: "power2.inOut",
  duration: 2.0,
  delay: 2.7
  }) 

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
  // console.log("Zone Panel Width = " + zoneomicsPanel.offsetWidth)
  // console.log("Gold Panel Width = " + goldstarPanel.offsetWidth)
  // console.log("Luxor Panel Width = " + luxorPanel.offsetWidth)
  // console.log("Loren Panel Width = " + lorenPanel.offsetWidth)
  // console.log("Zone Panel Width = " + zoneomicsPanel.offsetWidth)
  console.log("Zone Panel Width = " + zoneomicsPanel.offsetWidth)
  console.log("test")
  e.preventDefault();
  
  // NAVIGATION BUTTONS. 
  // Should move by +/- three sections
  
  // First, check to see if we've used the mousewheel
  // If we have, then we need to update the scroll_to position
  // so it matches how far we might have moved with scroll trigger
  // multiply that by total moveable width to get approximate px width
  // we can then add or subtract that from scroll_to
  // triggerMoved = Math.floor(triggerAmount * scrollWidth);
    let largerDesktopScroll = 910
    let smallerDesktopScroll = 900;
  // NEXT
  if( $(this).hasClass("navi--next")){
    // console.log(" triggerMoved: " + triggerMoved)
    // console.log(" triggerAmount: " + triggerAmount)
    // console.log(" maxScrollerWidth: " + maxScrollerWidth)
    console.log(" innerWidth: " + innerWidth)
    // console.log(" : " + )
    // console.log(" : " + )

    
    // check to see if we can move three sections forward (right)
    // if ((scroll_to + innerWidth) < maxScrollerWidth) {
      
    //   // scroll_to + screen width is less than overall moveable width
    //   // so lets set scroll_to = trigger position + screenwidth
    //   scroll_to = innerWidth / 2;
    //   console.log("here")
      
    // } else {
      
    //   // scroll_to + screen width is more than overall moveable width
    //   // so we can just go to right to the end
    //   // scroll_to = maxScrollerWidth;
    //         scroll_to = innerWidth / 7.4;
    //         console.log("or here")

    // }

  
    if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = largerDesktopScroll  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
        scroll_to = smallerDesktopScroll  ;
     console.log("scroll_TO: " + scroll_to)
    }
    //  else if (zoneomicsPanel.offsetWidth > 1500) {

    // }
    
  } else if ( $(this).hasClass("navi--prev1")) {

    if(zoneomicsPanel.offsetWidth > 1700) {
           console.log("here")
        scroll_to = 0 ;  
       } else {
          console.log("here actually")
          scroll_to = 0 ;  
       }
       

  } else if ( $(this).hasClass("navi--next2")) {
      //  if ((scroll_to + innerWidth) < maxScrollerWidth) {
      //   scroll_to = innerWidth / 1.01;
      //  } else {
      //   scroll_to = innerWidth / 3.7;
      //  }

      //   scroll_to = zoneomicsPanel.offsetWidth * 2 ;

       if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = (largerDesktopScroll - 20) * 2  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = (smallerDesktopScroll - 10) * 2 ;
     console.log("scroll_TO: " + scroll_to)
    }
  }

  else if ( $(this).hasClass("navi--prev2")) {

        if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = largerDesktopScroll  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = smallerDesktopScroll ;
     console.log("scroll_TO: " + scroll_to)
    }
  } else if ( $(this).hasClass("navi--next3")) {
      //  if ((scroll_to + innerWidth) < maxScrollerWidth) {
      //   // scroll_to = innerWidth / 1.01;
      //   console.log("here")

      //   scroll_to += innerWidth / 0.75
      //  } else {
      //   console.log("here actually")
        // scroll_to = zoneomicsPanel.offsetWidth * 3 ;
      // }


       if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = (largerDesktopScroll - 20) * 3  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = (smallerDesktopScroll - 15) * 3 ;
     console.log("scroll_TO: " + scroll_to)
    }
  }   else if ( $(this).hasClass("navi--prev3")) {

           if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = (largerDesktopScroll - 20) * 2  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = (smallerDesktopScroll - 10) * 2 ;
     console.log("scroll_TO: " + scroll_to)
    }
  } else if ( $(this).hasClass("navi--next4")) {
      //  if ((scroll_to + innerWidth) < maxScrollerWidth) {
      //   // scroll_to = innerWidth / 1.01;
      //   console.log("here")

      //   scroll_to += innerWidth / 0.75
      //  } else {
      //   console.log("here actually")
        // scroll_to = zoneomicsPanel.offsetWidth * 3 ;
      // }


       if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = (largerDesktopScroll - 20) * 4  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = (smallerDesktopScroll - 15) * 4 ;
     console.log("scroll_TO: " + scroll_to)
    }
  }  else if ( $(this).hasClass("navi--prev4")) {

           if(zoneomicsPanel.offsetWidth > 1700) {
     scroll_to = (largerDesktopScroll - 20) * 3  ;
     console.log("scroll_TO: " + scroll_to)
    } else {
      scroll_to = (smallerDesktopScroll - 15) * 3 ;
     console.log("scroll_TO: " + scroll_to)
    }
  }


  let nav_tl = gsap.timeline();
  
  nav_tl.to(window, {
    duration: 0.05, 
    // ease:"power4.out",
    scrollTo: scroll_to
  });
}

document.querySelector(".navi--next").addEventListener("click", slideAnim);
document.querySelector(".navi--next2").addEventListener("click", slideAnim);
document.querySelector(".navi--prev1").addEventListener("click", slideAnim);
document.querySelector(".navi--next3").addEventListener("click", slideAnim);
document.querySelector(".navi--prev2").addEventListener("click", slideAnim);
document.querySelector(".navi--next4").addEventListener("click", slideAnim);
document.querySelector(".navi--prev3").addEventListener("click", slideAnim);
document.querySelector(".navi--prev4").addEventListener("click", slideAnim);



/**
 * Other Stuff
 */

//  let tl = gsap.timeline();
// var rule = CSSRulePlugin.getRule(".image-wrapper-zoneomics::after"); //get the rule
// console.log(rule)
// gsap.to(rule, {duration: 1.4, ease: "power2.easeInOut", cssRule: {height: "0%"}});


// ScrollTrigger.matchMedia({

//   "(min-width: 1100px)": function() {

//     tl.to(rule, {
//       scrollTrigger: {
//         trigger: ".container",
//         // snap: 1 / (5 - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         // onUpdate: trigger => triggerAmount = trigger.progress
        
//       },
//       ease: "power2.inOut",
//       cssRule: {height: "0%"},
//       duration: 1.8
//     }).from('.image-wrapper-zoneomics', {scale: 1.6, delay: -1.8, duration: 2.8, ease: "power2.easeInOut"})
//     // .set('.zoneomics-circle', {scale: 0.0})
//     .from('.zoneomics-circle', {scale: 0.0, duration: 2.8, delay: -2.8, ease: "power2.easeInOut"})

//     gsap.to('.zoneomics-description', {opacity:1, duration: 2.8, delay: 1.2, ease: "power2.easeInOut"})
//     gsap.to('.zoneomics-mini', {opacity:1, duration: 2.8, delay: 1.0, ease: "power2.easeInOut"}),
//     gsap.to('.visit-link-zoneomics', {opacity:1, duration: 2.8, delay: 1.0, ease: "power2.easeInOut"}),
//     gsap.to('.zoneomics-selector', {opacity:1, duration: 2.8, delay: 1.0, ease: "power2.easeInOut"})
//      gsap.to('.zoneomics-heading', {opacity:1, duration: 2.8, delay: 0.5, ease: "power2.easeInOut"})
//     // .to('.image-wrapper', {
//     //    ease: "power2.easeInOut",
//     //   //  scale: 1.6,
//     //    duration: 1.4,
//     //    delay: -1.6,
//     //   scale: 1.0, 
//     //   // autoRound: false
//     // })
    
    
//   }
  
// })





// // Goldstar
//  let goldstarTl = gsap.timeline();

// var goldstarRule = CSSRulePlugin.getRule(".image-wrapper-goldstar::after"); //get the rule

// ScrollTrigger.matchMedia({

//   "(min-width: 1100px)": function() {

//     goldstarTl.to(goldstarRule, {
//       scrollTrigger: {
//         // trigger: ".goldstar",
//         start: 100
//         // snap: 1 / (5 - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         // onUpdate: trigger => triggerAmount = trigger.progress
        
//       },
//       ease: "power2.inOut",
//       cssRule: {height: "0%"},
//       duration: 1.8,
//       delay: 1
//     }).from('.image-wrapper-goldstar', {scale: 1.6, delay: 1, duration: 2.8, ease: "power2.easeInOut"})
//     // .set('.zoneomics-circle', {scale: 0.0})
//     .from('.goldstar-circle', {scale: 0.0, duration: 2.8, delay: -2.3, ease: "power2.easeInOut"})
//     .to('.goldstar-description', {opacity:1, duration: 2.8, delay: -1.5, ease: "power2.easeInOut"})
//     .to('.goldstar-mini', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.visit-link-goldstar', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.goldstar-selector', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//      .to('.goldstar-heading', {opacity:1, duration: 2.8, delay: -4.0, ease: "power2.easeInOut"})
    
//   }
  
// })






// // luxor
//  let luxorTl = gsap.timeline();

// var luxorRule = CSSRulePlugin.getRule(".image-wrapper-luxor::after"); //get the rule

// ScrollTrigger.matchMedia({

//   "(min-width: 1100px)": function() {

//     luxorTl.to(luxorRule, {
//       scrollTrigger: {
//         // trigger: ".luxor",
//         start: () => 1000
//         // snap: 1 / (5 - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         // onUpdate: trigger => triggerAmount = trigger.progress
        
//       },
//       ease: "power2.inOut",
//       cssRule: {height: "0%"},
//       duration: 1.8,
//       delay: 3
//     }).from('.image-wrapper-luxor', {scale: 1.6, delay: 3, duration: 2.8, ease: "power2.easeInOut"})
//     // .set('.zoneomics-circle', {scale: 0.0})
//     .from('.luxor-circle', {scale: 0.0, duration: 2.8, delay: 1, ease: "power2.easeInOut"})
//     .to('.luxor-description', {opacity:1, duration: 2.8, delay: -1.5, ease: "power2.easeInOut"})
//     .to('.luxor-mini', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.visit-link-luxor', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.luxor-selector', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//      .to('.luxor-heading', {opacity:1, duration: 2.8, delay: -4.0, ease: "power2.easeInOut"})
    
//   }
  
// })






// // loren
//  let lorenTl = gsap.timeline();

// var lorenRule = CSSRulePlugin.getRule(".image-wrapper-loren::after"); //get the rule

// ScrollTrigger.matchMedia({

//   "(min-width: 1100px)": function() {

//     lorenTl.to(lorenRule, {
//       scrollTrigger: {
//         trigger: ".loren",
//         // start: 0,
//         // containerAnimation: 2060,
//         // end: 4600, 
//         markers: true,
//         // endTrigger: 2600
//         // snap: 1 / (5 - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         // onUpdate: trigger => triggerAmount = trigger.progress
        
//       },
//       ease: "power2.easeInOut",
//       cssRule: {height: "0%"},
//       duration: 1.8,
//       delay: 3
//     }).from('.image-wrapper-loren', {scale: 1.6, delay: 1, duration: 2.8, ease: "power2.easeInOut"})
//     // .set('.zoneomics-circle', {scale: 0.0})
//     .from('.loren-circle', {scale: 0.0, duration: 2.8, delay: -2.8, ease: "power2.easeInOut"})
//     .to('.loren-description', {opacity:1, duration: 2.8, delay: -1.5, ease: "power2.easeInOut"})
//     .to('.loren-mini', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.visit-link-loren', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.loren-selector', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//      .to('.loren-heading', {opacity:1, duration: 2.8, delay: -4.0, ease: "power2.easeInOut"})
    
//   }
  
// })







// // nuage
//  let nuageTl = gsap.timeline();

// var nuageRule = CSSRulePlugin.getRule(".image-wrapper-nuage::after"); //get the rule

// ScrollTrigger.matchMedia({

//   "(min-width: 1100px)": function() {

//     nuageTl.to(nuageRule, {
//       scrollTrigger: {
//         trigger: ".nuage-trigger",
//         // snap: 1 / (5 - 1),
//         // base vertical scrolling on how wide the container is so it feels more natural.
//         // onUpdate: trigger => triggerAmount = trigger.progress
        
//       },
//       ease: "power2.easeInOut",
//       cssRule: {height: "0%"},
//       duration: 1.8,
//       delay: 1
//     }).from('.image-wrapper-nuage', {scale: 1.6, delay: -1.8, duration: 2.8, ease: "power2.easeInOut"})
//     // .set('.zoneomics-circle', {scale: 0.0})
//     .from('.nuage-circle', {scale: 0.0, duration: 2.8, delay: -2.8, ease: "power2.easeInOut"})
//     .to('.nuage-description', {opacity:1, duration: 2.8, delay: -1.5, ease: "power2.easeInOut"})
//     .to('.nuage-mini', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.visit-link-nuage', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//     .to('.nuage-selector', {opacity:1, duration: 2.8, delay: -2.5, ease: "power2.easeInOut"})
//      .to('.nuage-heading', {opacity:1, duration: 2.8, delay: -4.0, ease: "power2.easeInOut"})
    
//   }
  
// })


container = document.querySelector(".container");
// let elements = gsap.utils.toArray(document.querySelectorAll("section > *"));
// let roundButtons = gsap.utils.toArray(document.querySelectorAll("section > .right-column > .round-button"))
// console.log(roundButtons.length)
// console.log(sections)

// let timeline = gsap.timeline();

// timeline.to(sections, {
//     x: () =>
//         -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//     ease: "none",
//     scrollTrigger: {
//         pin: true,
//         scrub: 1,
//         overwrite: "auto",
//         trigger: container,
//         end: () => container.scrollWidth - document.documentElement.clientWidth
//     },
//     cssRule
    
// });

// let scrollTriggerTimeline = gsap.timeline();
// let i = 0;
// sections.forEach((section) => {
//   // section.childNodes[1].childNodes[3].childNodes[1].classList[1] image wrapper
//   console.log(section)
//   console.log((section.getBoundingClientRect().width / 2) * i )
//   i++
//   let imageWrapper = section.childNodes[1].childNodes[3].childNodes[1].classList[0];
//    let rule = CSSRulePlugin.getRule("."+section.childNodes[1].childNodes[3].childNodes[1].classList[0]+"::after"); //get 
  
//   scrollTriggerTimeline.to(rule, {
//       //  x: () =>  -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//        scrollTrigger: {
//         trigger: section,
//         overwrite: "auto",
//         markers: true,
//         // horizontal: true,
//         start: (section.getBoundingClientRect().width / 2) * i,
//         // end: () =>
//         //         (section.getBoundingClientRect().width) * i
//       },
//       immediateRender: false,
//       ease: "power2.easeInOut",
//       cssRule: {height: "0%"},
//       duration: 1.8,
//       delay: 0.5
      
//   })  
// })

let scrollTriggerTimeline = gsap.timeline();


