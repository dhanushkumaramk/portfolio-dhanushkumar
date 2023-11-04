//------------------toogle - icon---------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// --------------------------popup-menu-------

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

//--------------------nav-link active----------------
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //-------------------sticky navbar---------
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //-----------remove toogle icon and navbar when click navbar link (scrool)-----------
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// --------------------------scrool revel--------

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .btn",
  { origin: "bottom" }
);

// -----------------------typed js---------

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Student", "Fresher"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ---------------------------thank you----------
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

// ----------------------------------------
const nav = document.querySelector(".nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
