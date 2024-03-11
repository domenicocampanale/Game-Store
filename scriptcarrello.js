/*


// Funzione per aggiungere un elemento al carrello
function addToCart(productName, price) {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    // Crea un nuovo elemento di lista per l'elemento aggiunto
    var newItem = document.createElement('li');
    newItem.textContent = productName + ' - $' + price;

    // Aggiungi l'elemento al carrello
    cartItems.appendChild(newItem);

    // Aggiorna il totale del carrello
    var total = parseFloat(cartTotal.textContent.replace('Totale: $', ''));
    total += price;
    cartTotal.textContent = 'Totale: $' + total.toFixed(2);
}*/