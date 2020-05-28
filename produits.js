let params = new URL(document.location).searchParams;
let idArticle = params.get("id");
console.log(idArticle);

//creation et envoie objet requete
let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras/" + idArticle);
request.send();

//attente reponse et appel fonction de retour
request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // si tout c'est bien passée
    let product = JSON.parse(this.responseText); // recuperation de la liste de produits
    console.log(product.name); //appel de la fonction d'affichage des produits
    showDetailsProduct(product);
  }
};

const showDetailsProduct = (article) => {
  const name = document.getElementById("h3-article");
  name.innerHTML = article.name;

  const price = document.getElementById("price-article");
  price.innerHTML = article.price + " €";

  const description = document.getElementById("description-article");
  description.innerHTML = article.description;

  const img = document.getElementById("img-article");
  img.src = article.imageUrl;
};
