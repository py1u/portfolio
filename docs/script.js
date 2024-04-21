// import { Gradient } from "whatamesh";
// const gradient = new Gradient();
// gradient.initGradient("#gradient-canvas");


const links = document.querySelectorAll(".nav-hover");

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

// alert("testing script.js")