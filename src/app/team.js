import gsap from 'gsap'
import * as THREE from 'three'
import hoverEffect from './hover-effect'


var myAnimation = new hoverEffect({
    parent: document.querySelector('.distortion-talha'),
    intensity: 0.2,
    image1: '../images/talha-serious.png',
    image2: '../images/talha-silly.jpg',
    displacementImage: '../images/diss.png'


})