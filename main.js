const arr = ["first", "second", "third"];
const h1s = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
const ps = [
  "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];
let i = 0;
const imagePlaceHolder = document.querySelector(".left-section");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const textPlaceholder = document.querySelector(".text-container");
const h1 = textPlaceholder.querySelector("h1");
const p = textPlaceholder.querySelector("p");
const a = document.querySelectorAll(".left-section ul li a");
const logo = document.querySelector(".img-logo");

leftArrow.addEventListener("click", function (e) {
  e.preventDefault();
  i--;
  if (i == -1) i = 2;
  update();
});

rightArrow.addEventListener("click", function (e) {
  e.preventDefault();
  i++;
  if (i == 3) i = 0;
  update();
});

const update = () => {
  imagePlaceHolder.classList.add("active");
  h1.classList.remove("inactive");
  h1.classList.add("active");
  p.classList.remove("inactive");
  p.classList.add("active");
  setTimeout(() => {
    logo.classList.add("active");
    a.forEach((el) => {
      el.classList.add("active");
    });
  }, 500);
  setTimeout(() => {
    h1.innerHTML = h1s[i];
    p.innerHTML = ps[i];
    h1.classList.remove("active");
    h1.classList.add("inactive");
    p.classList.remove("active");
    p.classList.add("inactive");
    imagePlaceHolder.className = `left-section ` + arr[i];
    logo.classList.remove("active");
    a.forEach((el) => {
      el.classList.remove("active");
    });
    if (i == 3) i = 0;
  }, 1200);
};

let state = false;
const navBtn = document.querySelector("#dropDown");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const ul = menu.querySelector("ul");
navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  state = !state;
  updateImage();
});

const updateImage = () => {
  if (state) {
    navBtn.setAttribute("src", "./images/icon-close.svg");
    nav.classList.add("active");
    menu.classList.add("active");
    ul.classList.add("active");
  } else {
    navBtn.setAttribute("src", "./images/icon-hamburger.svg");
    nav.classList.remove("active");
    menu.classList.remove("active");
    ul.classList.remove("active");
  }
};
