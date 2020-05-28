let params = new URL(document.location).searchParams;
let idArticle = params.get("id");
console.log(idArticle);

//attente reponse
idArticle.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // si tout c'est bien passée
    let article = JSON.parse(this.responseText); // recuperation de la liste de produits
    console.log(article);
  }
};

//const img = document.getElementById("img-article");
//img.innerHTML = params[i].imageUrl;
//console.log(idArticle.name);
