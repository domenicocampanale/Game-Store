class Videogioco {
  /**
   *
   * @param {string} nome
   * @param {string[]} piattaforme
   * @param {number} prezzo
   * @param {string} immagine
   * @param {string} pagina
   */
  constructor(nome, piattaforme, prezzo, immagine, pagina) {
    this.nome = nome;
    this.piattaforme = piattaforme;
    this.prezzo = prezzo;
    this.immagine = immagine;
    this.pagina = pagina;

  }
}

/**
 * @type {Videogioco[]}
 */
let giochi = [];

/**
 * Funzione per aggiungere un elemento al carrello
 * @param {string} nome
 * @param {string[]} piattaforme
 * @param {number} prezzo
 * @param {string} immagine
 * @param {string} pagina
 */
 export function aggiungiGioco(nome, piattaforme, prezzo, immagine, pagina) {
  const gioco = new Videogioco(nome, piattaforme, prezzo, immagine, pagina);
  const giochiSalvati = prendiGiochi();
  alert("Il gioco è stato aggiunto al carrello!");

  giochi = [...giochiSalvati, gioco];
  localStorage.setItem("giochi", JSON.stringify(giochi));

  


}

export function prendiGiochi() {
  const giochiPresi = JSON.parse(localStorage.getItem("giochi"));
  

  if (giochiPresi) {
    return giochiPresi;
  }

  return [];
}
