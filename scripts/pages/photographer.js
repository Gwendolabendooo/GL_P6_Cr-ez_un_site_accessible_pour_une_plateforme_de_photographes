let photographers = []
let media = []

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id")

function getPhotographer() {
    const photographer = photographers.find((photographerexisted) => {
        return photographerexisted.id == id
    })
    return photographer
}

function getRealisation() {
    function goodPicture(element) {
        return element.photographerId == id;
      }

    const realisation = media.filter(goodPicture);

    return realisation
}

function filterPictures(event){
    const posts = PhotographerPictures(getRealisation(), getPhotograph)
    posts.filterPictures(event.target.value)
}

function getPhotographers() {
    //Creation requete json
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    //Get des données json
    readTextFile("./data/photographers.json", function(text){
        var data = JSON.parse(text);
        photographers = data.photographers
        media = data.media
        getPhotograph = getPhotographer()
        const detail = DetailPhotographer(getPhotograph)
        //Picture liste
        const posts = PhotographerPictures(getRealisation(), getPhotograph)

        document.querySelector(".photograph-header").appendChild(detail.detailPhotographer());
        posts.photographerPictures();
    });

}
getPhotographers()