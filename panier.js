let array = localStorage.getItem("cart");
let arrayJS = JSON.parse(array);

// fonction pour ajouter les articles dans le panier
const addElementOfProduct = () => {
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
};

// fonction pour vérifier si le panier est rempli ou vide
const checkCartContents = () => {
  // si le panier est rempli
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0 && array != "[]") {
    addElementOfProduct(); // appel de la fonction addElementOfProduct
    removeProduct(); // appelle de la fonction removeProduct

    // sinon (si le penier est vide)
  } else {
    const cartEmpty = document.getElementById("list-cart");
    cartEmpty.innerHTML = "<span>Votre panier est vide !</span>"; // j'affiche un message
  }
};

// fonction pour effacer un produit
const removeProduct = () => {
  const btnRemove = document.querySelectorAll(".remove"); // j'appelle tous les boutons pour effacer les produits

  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", (e) => {
      let array = localStorage.getItem("cart"); // je récupère l'array en local storage
      let arrayJS = JSON.parse(array); // je transforme le contenu JSON en JS
      arrayJS.splice([i], 1); // j'efface un élément de l'array => splice([indice de départ], nombre d'éléments à enlever)
      localStorage.setItem("cart", JSON.stringify(arrayJS)); // je mets le nouveau array en localStorage
      document.location.reload(true); // pour rafraîchir la page à la fin de la fonction
    });
  }
};
//el.remove();

checkCartContents(); // appel de la fontion 'checkCartContents'

// fonction pour calculer la somme du total du panier
const totalCost = () => {
  let totalCount = 0; // je crée une variable initialiser à zéro
  for (let i in arrayJS) {
    // pour chaque produit présent dans le panier
    let array = localStorage.getItem("cart"); // je récupère le price depuis le local storage
    let arrayJS = JSON.parse(array); // je le transforme en nombre
    totalCount += arrayJS[i].price; //je rajoute chaque produit à la variable totalCount
  }
  return totalCount; // totalCount me retourne la Somme de tous les price des produits
};
const resultTotalCost = totalCost();

const showTotalCost = () => {
  const divTotal = document.getElementById("total");
  divTotal.innerHTML = "<span>" + "Totale : " + resultTotalCost + " €</span>";
};
showTotalCost();

// fonction pour vérifier les données de l'utilisateur
const btn = document.getElementById("btn-validate");
const surname = document.getElementById("surname");
const name = document.getElementById("name");
const date = document.getElementById("date");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

// nom
let regSurname = /^([A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])( |'|-|[A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])*/g;
surname.addEventListener("input", function (e) {
  if (regSurname.test(surname.value)) {
    localStorage.setItem("surname", surname.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userSurname = localStorage.getItem("surname");
if (localStorage.getItem("surname")) {
  surname.setAttribute("value", userSurname);
}
// end nom

// prénom
let regName = /^([A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])( |'|-|[A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])*/g;
name.addEventListener("input", function (e) {
  if (regName.test(name.value)) {
    localStorage.setItem("name", name.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userName = localStorage.getItem("name");
if (localStorage.getItem("name")) {
  name.setAttribute("value", userName);
}
// end prenom

// date de naissance
date.addEventListener("input", function (e) {
  if (date.value) {
    localStorage.setItem("date", date.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userDate = localStorage.getItem("date");
if (localStorage.getItem("date")) {
  date.setAttribute("value", userDate);
}
// end date de naissance

// adresse
let regAddress = /^([A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])( |'|-|[A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])*/g;
address.addEventListener("input", function (e) {
  if (regAddress.test(address.value)) {
    localStorage.setItem("address", address.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userAddress = localStorage.getItem("address");
if (localStorage.getItem("address")) {
  address.setAttribute("value", userAddress);
}
// end adresse de naissance

// ville
let regCity = /^([A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])( |'|-|[A-Z]|[a-zàáâäçèéêëìíîïñòóôöùúûü])*/g;
city.addEventListener("input", function (e) {
  if (regCity.test(city.value)) {
    localStorage.setItem("city", city.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userCity = localStorage.getItem("city");
if (localStorage.getItem("city")) {
  city.setAttribute("value", userCity);
}
// end ville de naissance

// email
let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
email.addEventListener("input", function (e) {
  if (regEmail.test(email.value)) {
    localStorage.setItem("email", email.value); // je sauvegarde l'info en local storage
    console.log("codice valido");
    btn.removeAttribute("disabled", "");
  } else {
    console.log(" codice INVALIDO !!!!!");
    btn.setAttribute("disabled", "");
  }
});
// si il y a l'info dans local storage je l'affiche par default
let userEmail = localStorage.getItem("email");
if (localStorage.getItem("email")) {
  email.setAttribute("value", userEmail);
}
// end ville de naissance

// creation array pour envoye de la commande
const btnValidate = document.getElementById("btn-validate");

const validateCart = () => {
  btnValidate.addEventListener("click", function () {
    const arrayId = [];
    event.preventDefault(); // pour enlever les fonctions par défaut du bouton
    // si le local storage existe
    if (localStorage.getItem("cart")) {
      for (let i in arrayJS) {
        let array = localStorage.getItem("cart"); // je récupère le local storage
        let arrayJS = JSON.parse(array); // je transforme le contenu JSON en JS

        let idProducts = arrayJS[i]._id;
        arrayId.push(idProducts);

        localStorage.setItem("arrayId", arrayId);

        console.log(arrayId);
      }

      /*
        arrayJS.push(article); // je push dedans un nouveau article
        localStorage.setItem("cart", JSON.stringify(arrayJS)); // je mets le nouveau array en localStorage

        console.log("si il y est deja" + localStorage.getItem("cart")); // test

        // sinon (si le local storage est vide)
      } else {
        let array = []; // je crée un array vide
        array.push(article); // je push dedans un nouveau article
        localStorage.setItem("cart", JSON.stringify(array)); // je mets l'array en localStorage

        console.log("si il y est pas" + localStorage.getItem("cart")); // test
        */
    }
  });
};
validateCart();

// objet contenant les info de l'utilisateur
const contact = {
  lastName: userSurname,
  firstName: userName,
  adress: userAddress,
  city: userCity,
  email: userEmail,
};

console.log(contact);

// creation de l'array produits

// let params = new URL(document.location).searchParams;
// let userOrder = params.get("order");
// console.log(userOrder);
//creation et envoie objet requete
// let request = new XMLHttpRequest();
// request.open("GET", "http://localhost:3000/api/cameras/" + userOrder);
// request.send();

// //attente reponse et appel fonction de retour
// request.onreadystatechange = function () {
//   if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//     let order = JSON.parse(this.responseText);

//     console.log(order);
//   }
// };
