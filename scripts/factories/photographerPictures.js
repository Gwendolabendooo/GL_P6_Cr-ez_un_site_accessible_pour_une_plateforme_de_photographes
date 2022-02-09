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
            img.classList.add("imgDiapo")
            img.setAttribute("src", dir+element.image);
            img.setAttribute("data-img", element.image);
            document.getElementById("ctn-diapo").appendChild(img)
        })
    }
    diapo()
    

    function photographerPictures() {
        data.forEach(element => {
            if(element.image != undefined){
                const ctnDetail = document.createElement( 'div' );
                const img = document.createElement( 'img' );
                const likes = document.createElement( 'div' );
                const title = document.createElement( 'h3' );
                const date = document.createElement( 'div' );
                const heart = document.createElement( 'img' );
                const ctnSummary = document.createElement( 'div' );

                //Compteur de like
                totalLike = totalLike + element.likes

                date.innerHTML = element.date
                likes.innerHTML = element.likes
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

                likes.appendChild(heart)
                ctnSummary.appendChild(title);
                ctnSummary.appendChild(likes);
                ctnDetail.appendChild(img);
                ctnDetail.appendChild(ctnSummary)
                // ctnDetail.appendChild(date)

                ctn_pictures.appendChild(ctnDetail); 
            }
        });
        document.querySelector("body > div.price.p-2 > div:nth-child(1) > span").innerHTML = totalLike

        return ctn_pictures
    }
    return { photographerPictures, filterPictures }
}