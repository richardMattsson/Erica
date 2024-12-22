const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get("title");
console.log(title);

const mainTitle = document.querySelector("#mainTitle");
mainTitle.textContent = title;

const article = document.querySelector("article");

function addImages(src, alt, text) {
  const figure = document.createElement("figure");
  const linkToPainting = document.createElement("a");
  linkToPainting.href = `about.html?src=${src}`;
  figure.appendChild(linkToPainting);
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("zoom");
  linkToPainting.appendChild(img);
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = text;
  figure.appendChild(figCaption);
  article.appendChild(figure);

  linkToPainting.addEventListener("click", (event) => {
    // linkToPainting.src = `${event.target.src}`;
    linkToPainting.src = "about.html";
    console.log(event.target.src);
    console.log(event.target);
  });
}

switch (title) {
  // case "Erica Mattsson":
  //   addImages(
  //     "Pictures/ericaProfilbildExp.png",
  //     "Akryl tavla självporträtt Erica Mattsson",
  //     "Första självporträtt. "
  //   );
  //   break;
  case "Porträtt akryl":
    addImages(
      "Pictures/portraitPics/portraitOnCanvas2Exp.png",
      "akryl på canvas badhus",
      "Akryl på canvas 60 x 50 cm."
    );
    addImages(
      "Pictures/portraitPics/canvasOrangesExp.png",
      "akryl på canvas apelsiner",
      "Apelsiner 40 x 60 cm."
    );
    addImages(
      "Pictures/portraitPics/gardenOfEdenExp.png",
      "akryl edens lustgård",
      "Edens trädgård. 40 x 40 cm."
    );
    addImages(
      "Pictures/portraitPics/portraitNrOneExp.png",
      "akryl porträtt rosa bakgrund",
      "Akryl på canvas 18 x 24 cm."
    );
    addImages(
      "Pictures/portraitPics/portraitNrThreeExp.png",
      "akryl porträtt rött hår",
      "Porträtt nr. 3"
    );
    addImages(
      "Pictures/portraitPics/snowflakesexp.png",
      "akryl snöflingor",
      "Snöflingor. Akryl på canvas 40 x 40."
    );

    break;
  case "Hundporträtt":
    addImages(
      "Pictures/Hundar/hundBlåExp.png",
      "tavla hund blå bakgrund",
      "Blå"
    );
    addImages(
      "Pictures/Hundar/hundGrönExp.png",
      "tavla hund grön bakgrund",
      "Grön"
    );
    addImages(
      "Pictures/Hundar/hundGulExp.png",
      "tavla hund gul bakgrund",
      "Gul"
    );
    addImages(
      "Pictures/Hundar/hundLilaExp.png",
      "tavla hund lila bakgrund",
      "Lila"
    );
    addImages(
      "Pictures/Hundar/hundRosaExp.png",
      "tavla hund rosa bakgrund",
      "Rosa"
    );
    addImages(
      "Pictures/Hundar/hundRödExp.png",
      "tavla hund röd bakgrund",
      "Röd"
    );
    break;
  case "Dot paintings":
    addImages(
      "Pictures/Prickar/prickarRyggExp.png",
      "tavla dot painting rygg",
      "Rygg"
    );
    addImages(
      "Pictures/Prickar/prickarBenExp.png",
      "tavla dot painting ben",
      "Ben"
    );
    addImages(
      "Pictures/Prickar/prickarMageExp.png",
      "tavla dot painting mage",
      "Mage"
    );
    addImages(
      "Pictures/Prickar/prickarHänder2Exp.png",
      "tavla dot painting händer",
      "Händer"
    );
    addImages(
      "Pictures/Prickar/prickarDeVitoExp.png",
      "tavla dot painting danny devito",
      "Danny DeVito"
    );
    addImages(
      "Pictures/Prickar/prickarMonroeExp.png",
      "tavla dot painting marilyn monroe",
      "Marilyn Monroe"
    );
    break;
}
