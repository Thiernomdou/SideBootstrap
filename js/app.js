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


// Navbar Animation
$(window).scroll(function() {
    // si on scroll de plus de 30px du haut de l'écran
    if($(this).scrollTop() > 30) {
        // ajout de la classe opaque à la navbar
        $('.navbar').addClass('opaque');
    } else {
        // enlever la classe opaque à la navbar et 
        $('.navbar').removeClass('opaque');
    }
})