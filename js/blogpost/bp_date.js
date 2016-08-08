$(document).ready(function() {

    var d = new Date();
    //var day = new Array("Воскресенье", "Понедельник", "Вторник",
    //    "Среда", "Четверг", "Пятница", "Суббота");
    //var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    //    "июля", "августа", "сентября", "октября", "ноября", "декабря");
    var month = ['Jan','Feb','Mar','Apr','May','Jun',
        'Jul','Aug','Sep','Oct','Nov','Dec'];
    //временная мера, просто чтоб не оставлять значения пустыми
    $(".MyDate").each(function() {
        $(this).text ( month[d.getMonth()]+" "+d.getDate()+", " + d.getFullYear());
    });

    //$('#MyDateSecond').text(month[d.getMonth()]+" "+d.getDate()+", " + d.getFullYear());

    //    document.write(day[d.getDay()] + " " + d.getDate() + " " + month[d.getMonth()]
    //        + " " + d.getFullYear() + " г.");


})