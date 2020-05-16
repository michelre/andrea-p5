//creation et envoie objet requete
let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras");
request.send();

//attente reponse et appel fonction de retour
request.onreadystatechange = function () {
  // si tout c'est bien passée
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // recuperation de la liste de produits
    let products = JSON.parse(this.responseText);
    //appel de la fonction d'affichage des produits
    showListProducts(products);
  }
};

//declaration de la fonction d'affichage des produits
let showListProducts = function (products) {
  let listProducts = document.getElementById("listProducts");
  console.log(products);
  let contentHtml = "";
  for (let i = 0; i < products.length; i++) {
    contentHtml =
      contentHtml +
      "<a class=" +
      '"block-article"' +
      "href=" +
      '"produit.html">' +
      "<img class=" +
      '"block-article__img"' +
      "src=" +
      products[i].imageUrl +
      ">" +
      "<h3>Appareil photo: " +
      products[i].name +
      "</h3>" +
      "<div>Prix : " +
      products[i].price +
      " €</div>";
    ("></a>");
  }
  listProducts.innerHTML = contentHtml;
};

let productContent = document.getElementsById("listProducts");
productContent.addEventListener("click", function () {
  console.log("ciao a tutti !");
});
