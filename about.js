const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const src = urlParams.get("src");
console.log(src);

let painting = document.createElement("img");
painting.src = src;

const h1 = document.querySelector("h1");

let main = document.querySelector("main");

if (src !== null) {
  main.insertBefore(painting, h1);
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (event) => {
  console.log(event.target.value);
});

// const form = document.querySelector("#form");
// form.addEventListener("submit", (event) => {
//   console.log(event.target.value);
// });
