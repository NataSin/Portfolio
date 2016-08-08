/*
    //при скроллинге
$(window).scroll(function(){
    var HeightDocument = $(document).outerheight();
    var Top_modal_window = $(document).scrollTop(); //текущ позиция

    var PortOffset = $("div.myportfolio").offset();

    if (Top_modal_window>=500)
    {
        alert('HeightDocument');
        $(".header-div").css('backgroundColor','rgb(229, 214, 157)');
        //$(".navbar-inverse").css('background','url("../img/Fr.jpg")');

    };
        if (Top_modal_window<500)
        {
            //alert('прозрачн');
            $(".header-div").css('backgroundColor','transparent');
        };



});

*/





//цвет nav делаем не прозрачным а каким-то цветом