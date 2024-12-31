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

// const submitBtn = document.querySelector("#submitBtn");
// submitBtn.addEventListener("click", (event) => {
//   console.log(event.target.value);
// });

// const form = document.querySelector("#form");
// form.addEventListener("submit", (event) => {
//   console.log(event.target.value);
// });

(function () {
  emailjs.init("ObogTr-cDz6R_0oug");
})();

function sendEmail(e) {
  e.preventDefault();
  const name = document.querySelector("#namefield").value;
  console.log(name);
  const message = document.querySelector("#contactMessage").value;
  console.log(message);
  emailjs
    .send("service_9k925od", "template_x0pucqf", {
      from_name: "Erica",
      name: name,
      message: message,
    })
    .then(
      () => alert("Message sent!"),
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message: " + error.text);
      }
    );
}

document.getElementById("form").addEventListener("submit", sendEmail);
