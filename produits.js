let params = new URL(document.location).searchParams;
let idArticle = params.get("id");

//creation et envoie objet requete
let request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras/" + idArticle);
request.send();

//attente reponse et appel fonction de retour
request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let product = JSON.parse(this.responseText);
    showDetailsProduct(product);
    addProduct(product);
  }
};

const showDetailsProduct = (article) => {
  // image
  const img = document.getElementById("img-article");
  img.src = article.imageUrl;

  // nom du produit
  const name = document.getElementById("h3-article");
  name.innerHTML = article.name;

  // prix
  const price = document.getElementById("price-article");
  price.innerHTML = article.price + " €";

  // description
  const description = document.getElementById("description-article");
  description.innerHTML = article.description;

  // menu deroulant
  const lenses = article.lenses;

  for (let lens of lenses) {
    const option = document.createElement("option");
    const parent = document.getElementById("lentilles");
    parent.appendChild(option);
    option.innerHTML = lens;
  }
};

const addProduct = (article) => {
  const btnAdd = document.getElementById("btn-add");
  btnAdd.addEventListener("click", function () {
    event.preventDefault();

    if (localStorage.getItem("cart")) {
      let array = localStorage.getItem("cart");
      let arrayJS = JSON.parse(array);
      arrayJS.push(article);
      localStorage.setItem("cart", JSON.stringify(arrayJS));

      console.log("si il y est deja" + localStorage.getItem("cart"));
    } else {
      let array = [];
      array.push(article);
      localStorage.setItem("cart", JSON.stringify(array));
      console.log("si il y est pas" + localStorage.getItem("cart"));
    }
  });
};
