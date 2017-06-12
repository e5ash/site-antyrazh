// Popup
var Popup = {
    block: $('.popup'),
    window: $('.popup__window'),
    container: $('.popup__container'),
    title: $('.popup__title'),
    close: $('.popup__close'),
    bg: $('.popup__bg'),
    speed: 500,
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height(),
            windowHeight = $(window).height()
        this.block.css('padding-top', scrollTop + (windowHeight / 2 - (this.window.height() / 2) - 30)).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
    }
};

$('.popupShow').click(function() {
    $(this).removeAttr('href');
    Popup.funShow();
});

Popup.close.click(function() {
    Popup.funHide();
});

Popup.bg.click(function() {
    Popup.funHide();
});




$('.slider .slider__list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.slider__arrows .container')
})

$('.portfolio__image').slick({
    arrows: false,
    asNavFor: $('.portfolio__images')
});


$('.portfolio__images').slick({
    slidesToShow: 3,
    asNavFor: $('.portfolio__image'),
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2
        }}, {
        breakpoint: 861,
        settings: {
            slidesToShow: 1
        }}, {
        breakpoint: 501,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});

$('.work-3 .list').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
    responsive: [{
        breakpoint: 1220,
        settings: {
            slidesToShow: 1
        }}, {
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});


$('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    popupForm.css('display','none');
	    popupMessage.css('display','block');
	});
	return false;
});

$(document).ready(function(){
    $('.panel .nav a').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});


$('.panel .sticks .btn').click(function() {
    $('.panel .nav').slideToggle(300);
});

var w = $(window);

w.resize(function() {
    var wWidth = w.width();

    if(wWidth>768){
        $('.panel .nav').removeAttr('style');
    }
});
