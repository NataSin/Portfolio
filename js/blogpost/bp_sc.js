//корректировка поведения надписей на главной картинке

$(document).ready(function() {


    $(window).resize(function(){
        var WindWidth = $(window).width();
        var g=730;//780; //граница слома изображения
        //переменные из scss\myvar.scss ( должны быть одинаковые)
        var ColorBody='#f3efe4';                     //$color-body   беж
        var TitleImgAlignBottom=10;              //$title-img-align-bottom     10% в процентах
        var ColorMainButton='#e8930c';               //$color-main-button оранж
        if (WindWidth<g){
            //заголовок Latest Blog Post поднимаем выше и делаем яркого цвета
            $(".header-bg").css({'height':'180px'});
            $(".main-title-img span").css({'color': ColorMainButton});
            $(".main-title-img span").css({'bottom':'100%'});
            $(".main-title-img span").css({'font-size':'4.5vw'});
            $(".main-title-img article").css({'bottom':'60%'});
            $(".main-title-img article").css({'font-size':'1.8vw'});
            //$(".main-title-img article").css({'color': ColorMainButton});
        };

        //возвращаем исходные значения
        if (WindWidth>=g) {
            $(".header-bg").css({'height':'130px'});
            $(".main-title-img span").css({'color': ColorBody});
            $(".main-title-img span").css({'bottom':TitleImgAlignBottom+45+'%'});
            $(".main-title-img span").css({'font-size':'4.3vw'});
            $(".main-title-img article").css({'bottom':TitleImgAlignBottom+22+'%'});
            $(".main-title-img article").css({'font-size':'1.6vw'});
            //$(".main-title-img article").css({'color': ColorBody});
        };


    });

    $(window).resize();


    //построение списка архивов
    var myArh = {'one':'May 2016', 'two':'Juny 2016', 'three':'July 2016'};
    $.each(myArh, function(index, value) {
        $('#list-arh-li').prepend('<li><a href="#" rel="nofollow">'+value+'</a></li>');//добавили элемент списка
        //$('#list-arh-li').prepend('<li>'+value+'</li>');//добавили элемент списка
        $("#list-arh-li" ).addClass( ".name-style" );    //присваиваем стиль этому элементу
    });
    $("#list-arh-ul" ).addClass( ".sidebar-li" );    //присваиваем стиль этому списку элементов





    //вытягивание постов из базы (симулируем массивами)

    //присваивание значений дат в элементы классов из массива
    var myPostDate = ["May 1 2016", "Juny 15 2016", "Juny 28 2016"];
    $(".mainblogpostdate").each(function(index, value) {
        $(this).text (myPostDate[index]);
    });

    //присваивание имен юзеров в элементы классов из массива
    var myPostUser = ["Santa Claus", "Joe Shmoe", "Cheburashka" ];
    $(".mainblogpostuser").each(function(index, value) {
        $(this).text (myPostUser[index]);
    });

    //присваивание количества коммент в элементы классов из массива
    var myPostCimment = ["5", "8", "7" ];
    $(".mainblogpost-comment-digit").each(function(index, value) {
        $(this).text (myPostCimment[index]);
    });


    
    
    ///////////////////////




}    )  //ready(function()


