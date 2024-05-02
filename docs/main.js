// import { Gradient } from "whatamesh";
// const gradient = new Gradient();
// gradient.initGradient("#gradient-canvas");


// alert("testing script.js")
//
const links = document.querySelectorAll(".nav-option");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#5068A8";
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "#22223b";
    link.style.transform = "scale(1)";
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
  });
});

// const audio = document.getElementById("music");
// audio.volume = 0.03; // set volume to 50%

function loadMusic() {
  var audio = new Audio('assets/smartr.mp3');
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.03;
}
// window.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden") {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//   });

