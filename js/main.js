const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

//nav menu active
const currnetLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currnetLocation) {
    menuItem[i].className = "active";
  }
}

//scroll reveal
window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 500,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 350,
});

sr.reveal(".lin1", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".lin2", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 500,
});
sr.reveal(".lin3", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 700,
});
sr.reveal(".lin4", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 900,
});
