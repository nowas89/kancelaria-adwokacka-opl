//asd animation on scroll initiall script

AOS.init();

//preloader 

window.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');

    setTimeout(function() {
        loader.style.display = 'none';

    }, 2000);
});

//google maps settings
function initMap() {
    var myLatLng = { lat: 51.937739, lng: 15.501996 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        draggable: true,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map

    });

    var contentString = `KANCELARIA ADWOKACKA
    NAWOROL DĘBSKI SPÓŁKA PARTNERSKA
  `;

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}




// jquery scripts
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        // items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1700,
        autoplayHoverPause: true,
        // responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: true
            }
        }
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000]);
    });
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay');
    });
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus();
    });


    //smooth scroling
    $(function() {
        // This will select everything with the class smoothScroll
        // This should prevent problems with carousel, scrollspy, etc...
        $('.smoothScroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top services page
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    $('.lawyer-person__first').click(function() {

        $('.lawyer-person__second-cv').slideUp().addClass('closed');
        $('.lawyer-person__second').css('box-shadow', "0px 0px 4px 3.15px rgba(35, 31, 32, 0.1)");

        setTimeout(function() {
            $('.lawyer-person__first-cv').slideDown().removeClass('closed');
            $(".lawyer-person__first").css('box-shadow', "0px 0px 26px 3px rgba(0, 0, 0, 0.25)");
        }, 500);

    });

    $('.lawyer-person__second').click(function() {

        $('.lawyer-person__first-cv').slideUp().addClass('closed');
        $('.lawyer-person__first').css('box-shadow', "0px 0px 4px 3.15px rgba(35, 31, 32, 0.1)");

        setTimeout(function() {
            $('.lawyer-person__second-cv').slideDown().removeClass('closed');
            $(".lawyer-person__second").css('box-shadow', "0px 0px 26px 3px rgba(0, 0, 0, 0.25)");


        }, 500);
    });

    $('#loadMore').click(function() {
        $('.lawyers-header__restDescription').slideToggle().toggleClass('closed');
        if (!$(".lawyers-header__restDescription").hasClass("closed")) {
            $('#loadMore').val('Mniej Treści');
        } else {
            $('#loadMore').val('Czytaj Więcej');

        }

    });
});






//meda queries
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 769px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 500px

        const navBarRemove = document.getElementById('navBar');
        if (navBarRemove.classList.contains("bg-dark")) {
            navBarRemove.classList.remove('bg-dark');
            navBarRemove.classList.add('bg-faded');
        }
    } else {
        // window width is less than 500px

        const navBar = document.getElementById('navBar');
        if (navBar.classList.contains("bg-faded")) {
            navBar.classList.remove('bg-faded');
            navBar.classList.add('bg-dark');
        }
    }

}