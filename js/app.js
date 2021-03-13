/*Jquery Ekko Lightbox(quand on clique sur tous les éléments
    qui ont data-toggle="lightbox")*/
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
})

/* Carousel de texte (empêcher que quand
place la souris sur le carousel, ça arrête
le défilement des carousels)*/

$('.carousel').carousel({
    interval:2500,//2500 millisecondes
    pause:'null'
})