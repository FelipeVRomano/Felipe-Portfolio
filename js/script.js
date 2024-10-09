$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
});

// Redimensionamento de slides
$(window).resize(function() {
    $('#slides').css('height', '96vh');
}).trigger('resize');

// Função de navegação sticky
function stickyNavigation() {
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
    } else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }
}

// Inicialização do script
$(document).ready(function() {
    
    // Superslides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
        inherit_width_from: '#slides',
        inherit_height_from: '#slides'
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 15,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            780: { items: 3 },
            1000: { items: 4 }
        }
    });

    // Fancybox
    $("[data-fancybox]").fancybox();

    // Isotope - Filtro de Projetos
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    // Filtro por categoria
    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    // Scroll suave para seções
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });

    // Evento de scroll para sticky navigation
    $(window).on("scroll", stickyNavigation);

    // Modal functionality
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', () => {
        const popup = document.querySelectorAll('.popup.active');
        popup.forEach(modal => closeModal(modal));
    });

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = document.querySelector(button.dataset.modalTarget);
            openModal(popup);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            closeModal(popup);
        });
    });

});

// Função para abrir modal
function openModal(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    document.body.classList.add('no-scroll');
    overlay.classList.add('active');
}

// Função para fechar modal
function closeModal(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    document.body.classList.remove('no-scroll');
    overlay.classList.remove('active');
}