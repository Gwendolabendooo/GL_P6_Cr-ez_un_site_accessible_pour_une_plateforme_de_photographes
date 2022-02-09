function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//to deplace

function displayLightbox(id) {
    console.log("displayed", id)
    let index = 0
    document.querySelectorAll(".imgDiapo").forEach((element, i) => {
        console.log(element)
        if( element.getAttribute("data-img") == id){
            index = i
        }
    })
    console.log(index)
    document.querySelector(".imgDiapo").style.marginLeft = '-' + index * 400 + "px"
    const modal = document.querySelector("body > div.lightbox");
    modal.style.display = "flex";
}

function closeLightbox() {
    const modal = document.querySelector("body > div.lightbox");
    modal.style.display = "none";
}

function nextImg() {
    let margin = document.querySelector(".imgDiapo").style.marginLeft = document.querySelector(".imgDiapo").style.marginLeft
   
    margin = margin.substring(0, margin.length - 1)
    margin = margin.substring(0, margin.length - 1)

    if((document.querySelectorAll(".imgDiapo").length - 1) * -400 == margin){
        document.querySelector(".imgDiapo").style.marginLeft = 0 +"px"
    }else{
        document.querySelector(".imgDiapo").style.marginLeft = document.querySelector(".imgDiapo").style.marginLeft = margin - 400 + "px"
    }

}

function prevImg() {
    let margin = document.querySelector(".imgDiapo").style.marginLeft = document.querySelector(".imgDiapo").style.marginLeft
    
    margin = margin.substring(0, margin.length - 1)
    margin = margin.substring(0, margin.length - 1)

    if(margin == 0){
        document.querySelector(".imgDiapo").style.marginLeft = (document.querySelectorAll(".imgDiapo").length - 1) * -400 +"px"
    }else{
        document.querySelector(".imgDiapo").style.marginLeft = document.querySelector(".imgDiapo").style.marginLeft = margin - -400 + "px"
    }
}