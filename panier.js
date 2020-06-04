let array = localStorage.getItem("cart");
let arrayJS = JSON.parse(array);

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

// effacer produit

const btnRemove = document.querySelectorAll(".block-article");

for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
      // e.target.parentElement.remove();
      localStorage.removeItem(arrayJS[i]);
    }

    // if (localStorage.getItem("cart")) {
    //   let array = localStorage.getItem("cart");
    //   let arrayJS = JSON.parse(array);

    //   localStorage.removeItem(arrayJS[i]);
    //   localStorage.setItem("cart", JSON.stringify(arrayJS));
    // }
  });
}
