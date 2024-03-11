

// Ottieni il riferimento al form e all'elemento delle recensioni
var form = document.getElementById('reviewForm');
var reviewsContainer = document.getElementById('reviews');

// Aggiungi un gestore di eventi per l'invio del modulo
form.addEventListener('submit', function(event) {
    // Previeni il comportamento predefinito del modulo (ricarica della pagina)
    event.preventDefault();

    // Ottieni i valori inseriti nel modulo
    var authorInput = document.getElementById('author');
    var ratingInput = document.getElementById('rating');
    var commentInput = document.getElementById('comment');
    var author = authorInput.value;
    var rating = parseInt(ratingInput.value);
    var comment = commentInput.value;

    //Ottieni la data corrente
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString(); // Formatta la data come desideri

    // Crea un nuovo elemento div per la recensione
    var reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    // Crea elementi per mostrare l'autore, il rating e il commento della recensione
    var authorPara = document.createElement('p');
    authorPara.style.fontWeight = 'bold';
    authorPara.textContent = author;

    var datePara = document.createElement('p');
    datePara.style.fontStyle = 'italic';
    datePara.style.color = '#888';
    datePara.textContent =  dateString;

    var ratingPara = document.createElement('p');
    ratingPara.textContent = 'Rating: ' + rating + '/5 ★';

    var commentPara = document.createElement('p');
    commentPara.textContent = comment;




    // Aggiungi gli elementi al div della recensione
    reviewDiv.appendChild(authorPara);
    reviewDiv.appendChild(datePara);
    reviewDiv.appendChild(ratingPara);
    reviewDiv.appendChild(commentPara);

    // Aggiungi la recensione alla sezione delle recensioni nel DOM
    reviewsContainer.appendChild(reviewDiv);

    // Resetta il modulo
    form.reset();
});
