import { templateLogger } from "../functions/helpers.js"

import gsap from "gsap"
// Import modules
import ScrollTrigger from "gsap/ScrollTrigger.js"
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";
// import MotionPathPlugin from "gsap/MotionPathPlugin";

// Register modules
gsap.registerPlugin(
   ScrollTrigger,
   // Draggable,
   // Flip,
   // MotionPathPlugin
)

// Start
const animEl = document.querySelector('.content-anim')
if (animEl) {
   gsap.fromTo(
      '.content-anim',
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.inOut" }
   )
} else {
   templateLogger('No animation element found', 'warning')
}

