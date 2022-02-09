function photographerFactory(data) {
    const { name, portrait } = data;
    console.log(portrait, name)

    const picture = `assets/SamplePhotos/Photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", "photographer.html?id=" + data.id)
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(link)
        link.appendChild(img);
        link.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}