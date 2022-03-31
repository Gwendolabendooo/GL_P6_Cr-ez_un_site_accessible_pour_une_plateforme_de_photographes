let media = [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

//Permet de savoir quel photographe à été installé
function getPhotographer() {
  const photographer = photographers.find((photographerexisted) => {
    return photographerexisted.id == id;
  });
  return photographer;
}

//Génère les réalisations d'un photographe
function getRealisation() {
  function goodPicture(element) {
    return element.photographerId == id;
  }

  const realisation = media.filter(goodPicture);

  return realisation;
}

//Permet de filtrer les pictures
function filterPictures(event) {
  const posts = PhotographerPictures(getRealisation(), getPhotograph);
  posts.filterPictures(event.target.value);
}

function getPhotographers() {
  //Creation requete json
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }

  //Get des données json
  readTextFile("./data/photographers.json", function (text) {
    var data = JSON.parse(text);
    photographers = data.photographers;
    media = data.media;

    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
      getPhotograph = getPhotographer();
      document
        .querySelector(".photograph-header")
        .appendChild(detailPhotographer(getPhotograph).DetailPhotographer());
      PhotographerPictures(
        getRealisation(),
        getPhotograph
      ).photographerPictures();
    }
  });
}
getPhotographers();
