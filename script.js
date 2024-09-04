console.log('JS OK');

// Creazione costante con le immagini
// Prendere elementi dal DOM
// Creare le immagini
// Aggiungo la classe active alla prima immagine
// Rendere funzionanti i bottoni next e prev
// Rimuovere la classe active all'immagine corrente
// Controllo se vado fuori Array 
// Aggiungo la classe active all'immagine successiva


// Creazione costante con le immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//Prendere elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
const thumbnailGallery = document.getElementById('thumbnail');

// Creo l'elemento immagine e lo stampo in pagina (sia carosello che thumbnails)
let imgs = '';

for (let i = 0; i < sources.length; i++) {
    imgs += `<img src="${sources[i]}" alt="immagine-${i + 1}">`;
}

carouselGallery.innerHTML = imgs;
thumbnailGallery.innerHTML = imgs;

// Creo questa variabile in questa posizione altrimenti JS non troverebbe le immagini nell HTML
const images = document.querySelectorAll('#carousel img');
const thumbs = document.querySelectorAll('#thumbnail img');

// Aggiungo la classe active alla prima immagine (thumb e gallery)
let currentActiveIndex = 0
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');

// Aggiungere funziona al pulsante NEXT
nextButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // Incremento l'indice quindi passo all'immagine successiva
    currentActiveIndex++;

    // Controllo se vado fuori dall array
    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

// Aggiungere funziona al pulsante PREV
prevButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // Decremento l'indice quindi passo all'immagine precedente
    currentActiveIndex--;

    // Controllo se vado fuori dall arrayù
    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

// Reazione al click della thumbnail
for (let i = 0; i < thumbs.length; i++) {
    
    thumbs[i].addEventListener('click', function() {
        
        // Rimozione classe active dalle immagini della thumb
        images[currentActiveIndex].classList.remove('active');
        thumbs[currentActiveIndex].classList.remove('active');

        // Setto l'indice allo stesso valore dell'immagine della thumb
        currentActiveIndex = i;

        // Inserire classe active dalle immagini della thumb
        images[currentActiveIndex].classList.add('active');
        thumbs[currentActiveIndex].classList.add('active');
    })
}

