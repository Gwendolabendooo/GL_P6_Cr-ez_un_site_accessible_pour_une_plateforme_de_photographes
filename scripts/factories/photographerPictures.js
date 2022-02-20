function PhotographerPictures(data, photograph) {

    let totalLike = 0;

    const dir = `assets/SamplePhotos/${photograph.name}/`;
    const ctn_pictures = document.querySelector(".photograph-pictures"); 

    data.sort((pictureA, pictureB) => {
        return pictureB.likes - pictureA.likes
    })

    function filterPictures(param1){
        ctn_pictures.innerHTML = ""
        console.log(param1)
        const trie = data.sort((pictureA, pictureB) => {
            if(param1 == "popularity"){
                return pictureB.likes - pictureA.likes
            }else if(param1 == "titre"){
                return pictureA.title.toLowerCase().localeCompare(pictureB.title.toLowerCase());
            }else{
                return (Date.parse(pictureB.date) - Date.parse(pictureA.date));
            }
        })
        console.log(trie)
        diapo()
        photographerPictures()
    }

    function diapo() {
        document.getElementById("ctn-diapo").innerHTML = ""
        data.forEach(element => {
            const img =  document.createElement( 'img' );
            const title =  document.createElement( 'h3' );
            const ctnDiap = document.createElement( 'div' );
            title.classList.add("titleDiapo");
            title.innerHTML = element.title;
            img.classList.add("imgDiapo");
            img.setAttribute("src", dir+element.image);
            img.setAttribute("data-img", element.image);
            ctnDiap.appendChild(img)
            ctnDiap.appendChild(title)
            document.getElementById("ctn-diapo").appendChild(ctnDiap)
        })
    }
    diapo()
    

    function photographerPictures() {
        data.forEach((element, i) => {
            if(element.image != undefined){
                const ctnDetail = document.createElement( 'div' );
                const img = document.createElement( 'img' );
                const likes = document.createElement( 'div' );
                const title = document.createElement( 'h3' );
                const date = document.createElement( 'div' );
                const nbLike = document.createElement( 'div' );
                const heart = document.createElement( 'img' );
                const ctnSummary = document.createElement( 'div' );

                //Compteur de like
                totalLike = totalLike + element.likes

                date.innerHTML = element.date
                nbLike.innerHTML = element.likes
                title.innerHTML = element.title

                likes.classList.add("ctn-like")
                heart.classList.add("ml-2")
                ctnSummary.classList.add("ctn-summary")
                img.classList.add("picture")
                ctnDetail.classList.add('mt-2')

                img.setAttribute("src", dir+element.image);
                img.setAttribute("onclick","displayLightbox(" + "'" + element.image + "'" + ")");
                img.setAttribute("data-img", element.image);
                heart.setAttribute("src", "assets/icons/heart-solid.svg");

                likes.appendChild(nbLike)
                likes.appendChild(heart)
                likes.id = i;
                ctnSummary.appendChild(title);
                ctnSummary.appendChild(likes);
                ctnDetail.appendChild(img);
                ctnDetail.appendChild(ctnSummary)
                // ctnDetail.appendChild(date)
                likes.setAttribute("onclick","toggleLike(" + "'" + i + "'" + ")");

                ctn_pictures.appendChild(ctnDetail); 
            }
        });
        document.querySelector("body > div.price.p-2 > div:nth-child(1) > span").innerHTML = totalLike

        return ctn_pictures
    }
    return { photographerPictures, filterPictures }
}