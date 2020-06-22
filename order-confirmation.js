const orderConfirmation = document.getElementById("confirmation");
const title = document.getElementById("title");

let totalCost = localStorage.getItem("totalCost");
let totalCostJS = JSON.parse(totalCost);

let order = localStorage.getItem("order");
let orderJS = JSON.parse(order);

const confirmOrder = () => {
  // si il y a des produit en local storage
  if (typeof order != "undefined" && order != null && order.length != null && order.length > 0 && order != "[]" && order != "") {
    for (let i in orderJS) {
      title.innerHTML = "Merci " + orderJS.contact.firstName + " " + orderJS.contact.lastName + " pour votre commande.";
      orderConfirmation.innerHTML =
        "<span>Vous avez payé : <br />" + totalCostJS + " €</span><br /><span>Le numero de votre commande est : <br/>" + orderJS.orderId + "</span>";
    }
    // si il n y a rien renvoi vers la page d'accueil
  } else {
    alert("Pour valider votre commande, veuillez d'abord ajouter des produit au panier");
    location.href = "index.html";
  }
};

// dès que l'utilisateur reçois la confirmation de la commande, le panier sera vidé
async function deleteOrder() {
  const result = await confirmOrder(); // attends que la fonction soit terminée
  localStorage.removeItem("cart"); // avant de effacer le local storage
}

deleteOrder();
