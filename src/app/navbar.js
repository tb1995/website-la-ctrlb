
let isActive = false;
let sandwich = document.getElementById('sandwich')
let fullscreenNav = document.getElementById('fullscreen-nav')
let navbar = document.getElementById('navbar')


window.addEventListener('scroll', ()=> {
        // document.querySelector('.logo').src = "./images/ctrlb-alt.png"
        document.querySelector('.logo-text').classList.toggle('white-color', scrollY > 80)
    
})

function toggle(event) {
    event.preventDefault();
    console.log("testing")

    isActive = !isActive
    if(isActive)
 {
    sandwich.classList.add('is-active')
    fullscreenNav.classList.add('fullscreen-is-active')
 } else {
     sandwich.classList.remove('is-active')
     fullscreenNav.classList.remove('fullscreen-is-active')
 }

}

let yPos = 0;
function moveNavbar(e) {
    // console.log("ScrollY:" + scrollY)
    yPos += 1
    // console.log("yPos" + yPos)
    // navbar.style.transform = "translate(0, "+yPos+"px);" 
    // navbar.style.transform = "translate(400px, 400px);" 
    // navbar.style.transform = "translateY("+scrollY+"px)"; 
    // navbar.style.top = scrollY+"px";

    // navbar.style.backgroundColor = 'red';

}