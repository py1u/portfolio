// import { Gradient } from "whatamesh";
// const gradient = new Gradient();
// gradient.initGradient("#gradient-canvas");


// alert("testing script.js")

const links = document.querySelectorAll(".nav-links");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "white";
    link.style.transform = "scale(1.1)";
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.transform = "scale(1)";
    link.style.transition = "transform 0.3s ease, color 0.3s ease";
  });
});

const audio = document.getElementById("music");
audio.volume = 0.01; // set volume to 50%

