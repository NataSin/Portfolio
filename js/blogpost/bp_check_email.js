// Validate Input Search

var $colorContent = '#ffffff'; //white  переменная из scss\myvar.scss

$(document).ready(function() {

    $("#validate").keyup(function(){
        var email = $("#validate").val();
        if(email != 0)
        {
            if(isValidEmailAddress(email))
            {
                $("#validate").css({'border': '1px solid green'});
                $("#validEmail").css({'color': 'green'});
                $('#validEmail').text('Правильно');
            } else {
                $("#validate").css({'border': '1px solid #bf0000'});
                $("#validEmail").css({'color': '#bf0000'});
                $('#validEmail').text('Неправильно');
            }
        } else {
            ClearInputSearch();
        }

    });



    //очистка при выходе из правильно набранного Input
    $("#validate").blur(function(){
        var email = $("#validate").val();
        //при выходе из элемента
        //если не пусто и правильно, то очищаем
        if((email != 0) && (    $('#validEmail').text()==('Правильно')               ))
        {
            ClearInputSearch();
         };

    });



function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};


function ClearInputSearch(){
    $('#validEmail').text('');
    $(".input-w").css({'border': 'none'});
    $("#validEmail").css({'color': $colorContent});
};
    
    
    

}    )  //ready(function()


