function Prodotto(nome, prezzo, descrizione, immagine) {
    this.nome = nome;
    this.prezzo = prezzo;
    this.descrizione = descrizione;
    this.immagine = immagine;
}

const Store = {
    prodotti: [],
    aggiungiProdotto: function(prodotto) {
        this.prodotti.push(prodotto);
    },
    rimuoviProdotto: function(nomeProdotto) {
        this.prodotti = this.prodotti.filter(prodotto => prodotto.nome !== nomeProdotto);
    }
    // Altri metodi per gestire lo store...
};


const nuovoProdotto = new Prodotto("Nome Prodotto", 19.99, "Descrizione del prodotto", "immagine.jpg");
Store.aggiungiProdotto(nuovoProdotto);


function visualizzaProdotti() {
    const containerProdotti = document.getElementById('container-prodotti');
    containerProdotti.innerHTML = '';

    Store.prodotti.forEach(prodotto => {
        const cardProdotto = document.createElement('div');
        cardProdotto.classList.add('card-prodotto');
        // Aggiungi codice per creare la visualizzazione del prodotto nella card
        containerProdotti.appendChild(cardProdotto);
    });
}

// Chiamare visualizzaProdotti() per visualizzare i prodotti iniziali nello store


