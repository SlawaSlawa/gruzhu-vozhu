$(document).ready(function () {
    // REVIEWS BTN
    $('.reviews-btn').on('click', function () {
        $('.reviews-form-wrap').toggleClass('db');
    });
    $('.reviews-form-wrap').on('click', function (event) {
        let target = event.target;
        if (target.className == 'reviews-form-wrap db') {
            $('.reviews-form-wrap').removeClass('db');
        }
    });

    $('.reviews-form__closed-btn').on('click', function () {
        $('.reviews-form-wrap').removeClass('db');
    });
    // ///REVIEWS BTN
    // REVIEWS CONTENT

    $.ajax({
        dataType: "json",
        url: 'js/reviews-db.json',
        success: function (data) {

            data.forEach(item => {
                if (item.status == 1) {
                    $('.owl-carousel.reviews__slider').append(`
                    <div class="reviews__item">
                        <div class="reviews__item-wrap">
                            <div class="reviews__item-img"><img src="img/reviews/${item.img}.jpg" alt="Клиенты"></div>
                            <div class="reviews__item-name">${item.name}</div>
                        </div>
    
                        <div class="reviews__item-text">${item.text}</div>
                    </div>`);
                }
            });
            $(".reviews__slider").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 5,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 1000,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    },
                    1364: {
                        items: 5
                    }
                }
            });
        }
    });

    // ///REVIEWS CONTENT


    // REVIEWSFORM
    $('#reviewsForm').on('submit', function (event) {
        // event.preventDefault();
        console.log('click submit');


    });
    // ///REVIEWSFORM


    // SLIDERS
    $(".based-sider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });

    $(".photos-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    ///// SLIDERS

    // BURGER
    $('.burger-btn').on('click', function () {
        $('.burger-btn__row').toggleClass('burger-btn--active');
        $('.nav').toggleClass('burger-nav--active');
        $('.header').toggleClass('active');
    });

    ///// BURGER

    // КНОПКА НАВЕРХ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({
                    opacity: 1
                }).fadeIn('slow');
            }
        } else {
            $('#upbutton').stop(true, false).fadeOut('fast');
        }
    });
    // ///КНОПКА НАВЕРХ

    // ПЕРЕХОД ПО ЯКОРЯМ
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({
            scrollTop: dn
        }, 1000);

        /*
         * 1000 скорость перехода в миллисекундах
         */
    });
    // ///ПЕРЕХОД ПО ЯКОРЯМ

    // FEEDBACKBTN
    $('#feedbackBtn').on('click', function () {
        $('.modal-contacts-wrap').toggleClass('db');
    });
    // ///FEEDBACKBTN

    // FEED BACK CLOSED-BTN
    $('.modal-contacts__closed-btn').on('click', function () {
        $('.modal-contacts-wrap').removeClass('db');
    });

    $('.modal-contacts-wrap').on('click', function (event) {
        let target = event.target;
        if (target.className == 'modal-contacts-wrap db') {
            $('.modal-contacts-wrap').removeClass('db');
        }
    });
    // ///FEED BACK CLOSED-BTN



















});