let photographers = [];

//Récupère les données correspondantes à tous les photographes
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

    displayData();
  });
}

//Permet d'afficher la page principale 
function displayData() {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

function init() {
  // Récupère les datas des photographes
  getPhotographers();
}

init();
