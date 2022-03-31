function photographerFactory(data) {
  const { name, portrait, tagline, country, price, city } = data;

  const picture = `assets/SamplePhotos/Photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const ville = document.createElement("div");
    const tag = document.createElement("div");
    const prix = document.createElement("div");
    const link = document.createElement("a");
    link.setAttribute("href", "photographer.html?id=" + data.id);
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    const h2 = document.createElement("h2");
    tag.textContent = tagline;
    h2.textContent = name;
    ville.textContent = city + ", " + country;
    prix.textContent = price + " €/jour ";
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    link.appendChild(ville);
    link.appendChild(tag);
    link.appendChild(prix);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
