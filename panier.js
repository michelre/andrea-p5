let array = localStorage.getItem("cart");
let arrayJS = JSON.parse(array);

const checkCartContents = () => {
  // si le panier est rempli
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0 && array != "[]") {
    for (i = 0; i < arrayJS.length; i++) {
      // ajout des div
      const div = document.createElement("div"); //creation de la div
      div.className = "block-article"; // ajout de la class

      const parent = document.getElementById("list-cart"); // ou je vais appliquer la div
      parent.appendChild(div); // ajout de la div dans l'element parent

      // ajout des images
      const img = document.createElement("img");
      img.className = "block-article__img";
      img.src = arrayJS[i].imageUrl;
      div.appendChild(img);

      // ajout de name
      const h3 = document.createElement("h3");
      div.appendChild(h3);
      h3.innerHTML = arrayJS[i].name;

      // ajout de price
      const p = document.createElement("p");
      div.appendChild(p);
      p.innerHTML = "Prix de l'article : " + arrayJS[i].price + " €";

      // ajout du btn effacer
      const btn = document.createElement("button");
      btn.className = "remove";
      div.appendChild(btn);
      btn.innerHTML = "Effacer article";
    }
    removeProduct(); // appelle de la fonction removeProduct
    console.log("panier pieno");

    // sinon (si le penier est vide)
  } else {
    console.log("panier vuoto");
  }
};

// fonction pour effacer un produit
const removeProduct = () => {
  const btnRemove = document.querySelectorAll(".remove"); // j'appelle tous les boutons pour effacer les produits

  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", (e) => {
      let array = localStorage.getItem("cart"); // je récupère l'array en local storage
      let arrayJS = JSON.parse(array); // je transforme le contenu JSON en JS
      arrayJS.splice([i], 1); // j'efface un élément de l'array => splice([indice de départ], nombre d'éléments enlever)
      localStorage.setItem("cart", JSON.stringify(arrayJS)); // je mets le nouveau array en localStorage
      document.location.reload(true); // pour rafraîchir la page à la fin de la fonction
    });
  }
};
//el.remove();

checkCartContents(); // appel de la fontion 'checkCartContents'
