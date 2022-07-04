
let isActive = false;
let sandwich = document.getElementById('sandwich')
let fullscreenNav = document.getElementById('fullscreen-nav')


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

