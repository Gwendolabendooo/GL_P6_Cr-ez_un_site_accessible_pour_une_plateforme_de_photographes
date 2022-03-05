function DetailPhotographer(data) {
    console.log(data)

    const { name, portrait, city, tagline, country, price } = data;

    const picture = `assets/SamplePhotos/Photographers/${portrait}`;

    function detailPhotographer() {
        const ctnDetail = document.createElement( 'div' );
        const namePhotograph = document.createElement( 'h2' );
        const position = document.createElement( 'div' );
        const pos = document.createElement( 'h3' );
        const tagl = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const button = document.createElement( 'button' );

        button.classList.add("contact_button")
        ctnDetail.classList.add("DetailPhotographer")
        img.classList.add("PhotographerPicture")
        button.innerHTML = "Contactez-moi";
        button.setAttribute("onclick","displayModal()");
        tagl.textContent = tagline;
        tagl.classList.add("slogan")
        pos.textContent = city + ", " + country;
        namePhotograph.textContent = name;

        document.querySelector("body > div.price.p-2 > div:nth-child(2) > span").innerHTML = price;
        document.getElementById("contact-name").innerHTML = name;

        position.appendChild(namePhotograph)
        position.appendChild(pos);
        position.appendChild(tagl);
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        ctnDetail.appendChild(position);
        ctnDetail.appendChild(button);
        ctnDetail.appendChild(img);
        return (ctnDetail);
    }
    return { detailPhotographer }
}