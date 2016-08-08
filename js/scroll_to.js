$(document).ready(function(){
    $(".menu-skr").on("click","a", function skr (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var to = $(id).offset().top;
        //анимируем переход на расстояние - top за 1100 мс
        $('body,html').animate({scrollTop: to}, 1100);
    });


});
