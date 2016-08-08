///модальное окно//////////////////
$(document).ready(function(){
    $("#kuku").click(function() {     //прописываем реакцию на нажатие пункта navbar с id="cont" Контакты  см. index.ejs
        //Ширина и высота всего документа
        var HeightDocument = $(document).height();
        var WidthDocument = $(document).width();
        //Ширина и высота окна браузера
        var HeightScreen = $(window).height();
        //Плавное анимационное наложение на страницу фона - т.е. плавное появление окна-подложки
        // для красоты . В принципе и без окна-подложки можно обойтись.
        $(".modal_bg").css({'width':WidthDocument,'height':HeightDocument});
        $(".modal_bg").fadeIn(1000);
        $(".modal_bg").fadeTo('slow',0.75);
        //Расположение модального окна с содержимым по высоте учитывая скроллинг документа
        var Top_modal_window = $(document).scrollTop() + HeightScreen/2-$('.modal_window').height()/2;
        $(".modal_window").css({'top':Top_modal_window+'px','display':'block'});
        $(".modal_window").css({'cursor': 'pointer'});
        //Запрет на сколлинг страницы
        $("body").css({'overflow':'hidden'});
        return false;
    });

    //При клике на кнопке "Close Window", модальное окно и фон скрываются
    $("#modal-cloudclose").click(function () {
        $(".modal_bg, .modal_window").hide();
        $("body").css({'overflow':'auto'});
        $(".modal_window").css({'cursor': 'default'});
    });
    //При клике вне области модального окна, фон и модальное окно скрываются
    $(".modal_bg").click(function () {
        $(".modal_bg, .modal_window").hide();
        $("body").css({'overflow':'auto'});
        $(".modal_window").css({'cursor': 'default'});
    });
    //При клике на меню модальное окно и фон скрываются
    $(".navbar").click(function () {
        $(".modal_bg, .modal_window").hide();
        $("body").css({'overflow':'auto'});
        $(".modal_window").css({'cursor': 'default'});
    });

});

