const orderConfirmation = document.getElementById("confirmation");
const title = document.getElementById("title");

let totalCost = localStorage.getItem("totalCost");
let totalCostJS = JSON.parse(totalCost);

let order = localStorage.getItem("order");
let orderJS = JSON.parse(order);

for (let i in orderJS) {
  title.innerHTML = "Merci " + orderJS.contact.firstName + " " + orderJS.contact.lastName + " pour votre commande.";
  orderConfirmation.innerHTML =
    "<span>Vous avez payé : " +
    totalCostJS +
    " €</span><br /><span>Le numero de votre commande est : <br/>" +
    orderJS.orderId +
    "</span>";
}
