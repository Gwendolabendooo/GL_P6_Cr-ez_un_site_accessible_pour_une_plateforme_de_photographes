function PhotographerPictures(data, photograph) {
    let totalLike = 0;
  
    const dir = `assets/SamplePhotos/${photograph.name}/`;
    const ctn_pictures = document.querySelector(".photograph-pictures");
  
    data.sort((pictureA, pictureB) => {
      return pictureB.likes - pictureA.likes;
    });
  
    //Filtre en fonction du paramètre fourni
    function filterPictures(param1) {
      ctn_pictures.innerHTML = "";
      console.log(param1);
      data.sort((pictureA, pictureB) => {
        if (param1 == "popularity") {
          return pictureB.likes - pictureA.likes;
        } else if (param1 == "titre") {
          return pictureA.title
            .toLowerCase()
            .localeCompare(pictureB.title.toLowerCase());
        } else {
          return Date.parse(pictureB.date) - Date.parse(pictureA.date);
        }
      });
      diapo();
      photographerPictures();
    }
  
    function diapo() {
      document.getElementById("ctn-diapo").innerHTML = "";
      data.forEach((element) => {
        diapoPictureOrVideo(element);
      });
    }
  
    //Initialize le diapo
    diapo();
  
    //Interface permettant de creer un image ou une video dans le carroussel
    function diapoPictureOrVideo(media) {
      if (media.image != undefined) {
        addImageDiapo(media);
      } else {
        addVideoDiapo(media);
      }
    }
  
    //Interface permettant de creer un image ou une video
    function pictureOrVideo(media, i) {
      if (media.image != undefined) {
        addImage(media, i);
      } else {
        addVideo(media, i);
      }
    }
  
    function addVideoDiapo(element) {
      const video = document.createElement("video");
      const source = document.createElement("source");
      const title = document.createElement("h3");
      const ctnDiap = document.createElement("div");
      title.classList.add("titleDiapo");
      title.innerHTML = element.title;
      ctnDiap.classList.add("imgDiapo");
      source.setAttribute("src", dir + element.video);
      source.setAttribute("alt", element.video);
      video.setAttribute("data-img", element.video);
      video.setAttribute("controls", true);
      video.appendChild(source);
      ctnDiap.appendChild(video);
      ctnDiap.appendChild(title);
      document.getElementById("ctn-diapo").appendChild(ctnDiap);
    }
  
    function addImageDiapo(element) {
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const ctnDiap = document.createElement("div");
      title.classList.add("titleDiapo");
      title.innerHTML = element.title;
      ctnDiap.classList.add("imgDiapo");
      img.setAttribute("src", dir + element.image);
      img.setAttribute("alt", element.image);
      img.setAttribute("data-img", element.image);
      ctnDiap.appendChild(img);
      ctnDiap.appendChild(title);
      document.getElementById("ctn-diapo").appendChild(ctnDiap);
    }
  
    function addImage(element, i) {
      const ctnDetail = document.createElement("article");
      const img = document.createElement("img");
      const likes = document.createElement("div");
      const title = document.createElement("h3");
      const date = document.createElement("div");
      const nbLike = document.createElement("div");
      const heart = document.createElement("img");
      const ctnSummary = document.createElement("div");
  
      //Compteur de like
      totalLike = totalLike + element.likes;
  
      date.innerHTML = element.date;
      nbLike.innerHTML = element.likes;
      title.innerHTML = element.title;
  
      likes.classList.add("ctn-like");
      heart.classList.add("ml-2");
      ctnSummary.classList.add("ctn-summary");
      img.classList.add("picture");
      ctnDetail.classList.add("mt-2");
  
      img.setAttribute("src", dir + element.image);
      img.setAttribute("alt", element.image);
      img.setAttribute(
        "onclick",
        "displayLightbox(" + "'" + element.image + "'" + ")"
      );
      img.setAttribute("data-img", element.image);
      heart.setAttribute("src", "assets/icons/heart-solid.svg");
      heart.setAttribute("alt", "Like");
  
      likes.appendChild(nbLike);
      likes.appendChild(heart);
      likes.setAttribute("tabindex", 0);
      likes.id = i;
      ctnSummary.appendChild(title);
      ctnSummary.appendChild(likes);
      ctnDetail.appendChild(img);
      ctnDetail.appendChild(ctnSummary);
      ctnDetail.setAttribute("tabindex", 0);
  
      ctnDetail.setAttribute(
        "onkeypress",
        "displayLightbox(" + "'" + element.image + "'" + ")"
      );
      likes.setAttribute("onkeypress", "toggleLike(" + "'" + i + "'" + ")");
      likes.setAttribute("onclick", "toggleLike(" + "'" + i + "'" + ")");
  
      ctn_pictures.appendChild(ctnDetail);
    }
  
    function addVideo(element, i) {
      const ctnDetail = document.createElement("article");
      const video = document.createElement("video");
      const source = document.createElement("source");
      const likes = document.createElement("div");
      const title = document.createElement("h3");
      const date = document.createElement("div");
      const nbLike = document.createElement("div");
      const heart = document.createElement("img");
      const ctnSummary = document.createElement("div");
  
      //Compteur de like
      totalLike = totalLike + element.likes;
  
      date.innerHTML = element.date;
      nbLike.innerHTML = element.likes;
      title.innerHTML = element.title;
  
      likes.classList.add("ctn-like");
      heart.classList.add("ml-2");
      ctnSummary.classList.add("ctn-summary");
      video.classList.add("picture");
      ctnDetail.classList.add("mt-2");
  
      source.setAttribute("src", dir + element.video);
      source.setAttribute("alt", element.video);
      video.setAttribute(
        "onclick",
        "displayLightbox(" + "'" + element.video + "'" + ")"
      );
      video.setAttribute("data-img", element.video);
      heart.setAttribute("src", "assets/icons/heart-solid.svg");
      heart.setAttribute("alt", "Like");
  
      likes.appendChild(nbLike);
      likes.appendChild(heart);
      likes.id = i;
      video.appendChild(source);
      ctnSummary.appendChild(title);
      likes.setAttribute("tabindex", 0);
      ctnSummary.appendChild(likes);
      ctnDetail.appendChild(video);
      ctnDetail.setAttribute("tabindex", 0);
      ctnDetail.appendChild(ctnSummary);
  
      ctnDetail.setAttribute(
        "onkeypress",
        "displayLightbox(" + "'" + element.video + "'" + ")"
      );
      likes.setAttribute("onkeypress", "toggleLike(" + "'" + i + "'" + ")");
      likes.setAttribute("onclick", "toggleLike(" + "'" + i + "'" + ")");
  
      ctn_pictures.appendChild(ctnDetail);
    }
  
    //Crée la gallery d'un photographe
    function photographerPictures() {
      data.forEach((element, i) => {
        pictureOrVideo(element, i);
      });
      document.querySelector(
        "body > div.price.p-2 > div:nth-child(1) > span"
      ).innerHTML = totalLike;
  
      return ctn_pictures;
    }
    return { photographerPictures, filterPictures };
  }
  