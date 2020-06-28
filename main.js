
const ajax = new Ajax();
ajax.get("http://localhost:3000/api/cameras")
  .then((products) => {
    showListProducts(products); //appel de la fonction d'affichage des produits
  });

//declaration de la fonction d'affichage des produits
const showListProducts = (articles) => {
  for (let i in articles) {
    // ajout du lien a
    const a = document.createElement("a"); //creation d' un lien a
    a.className = "block-article"; // ajout de la class
    a.href = "produits.html?id=" + articles[i]._id;
    const parent = document.getElementById("listProducts"); // ou je vais appliquer le a
    parent.appendChild(a); // ajout de a dans l'element parent

    // creation de la div
    const div = document.createElement("div"); //creation d'une div
    a.appendChild(div); // ajout de la div dans l'element parent

    // ajout des images
    const img = document.createElement("img");
    img.className = "block-article__img";
    img.src = articles[i].imageUrl;
    div.appendChild(img);

    // ajout de name
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.innerHTML = articles[i].name;

    // ajout de price
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = "Prix de l'article : " + articles[i].price + " €";
  }
};

