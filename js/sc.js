$(document).ready(function() {
    $("a.ancLinks").click(function () {  //нажатие на нижнюю круглую кнопку Вверх
        $('html,body').animate( { scrollTop: 0 }, 2000 );
         //window.scrollTo(0,1);

        //var elementClick = $(this).attr("href");
        //alert(elementClick);
        //var destination = $(elementClick).offset();
        //alert(destination);
        //var ddd=$(destination.top);
        //$('html,body').animate( { scrollTop: ddd }, 100 );
        //return false;
    });
});




/*
показывает высоту окна
$( document ).ready(function() {
    var HeightDocument = $(window).innerHeight();
    alert( HeightDocument );
   // $(".button-round").css('top','HeightDocument*0.3'+'px');
    //$(".myportfolio").css('top','HeightDocument*0.4'+'px');
});

*/



/*

//функция, не пускающая круглую кнопку выше, чем 80пиксел
(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
    var a = document.querySelector('.button-round'), b = null;  // селектор блока, который нужно закрепить
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
    function Ascroll() {
        if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
            var Sa = getComputedStyle(a, ""), s = '';
            for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');  // создать потомка
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
            a.style.padding = '0';
            a.style.border = '0';  // если элементу присвоен padding или border
        }
        if (a.getBoundingClientRect().top <= 80) { //!!!!! ЗДЕСЬ И В СТИЛЕ sticky ДОЛЖНЫ БЫТЬ ОДНИ И ТЕ ЖЕ ЧИСЛА   !!!
                                                    // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
            b.className = 'sticky';
        } else {
            b.className = 'button-round';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);  // если изменить размер окна браузера, измениться ширина элемента
    }
})()


*/







//отлаженная функция (может понадобится), меняющая цвет body в зависимости от resize
/*  $(window).resize(function(){
    if((   $(document).width()   ) < 850)  {
    //alert("eee"   +  $(document).width()    );
        $("body").css('backgroundColor','#035C55') ;
    };
    if((   $(document).width()   ) > 850)  {
        //alert("eee"   +  $(document).width()    );
        $("body").css('backgroundColor','white') ;
    };
});
*/

//$(".header-bg").bind("click", function(){
//    alert('Вы нажали на элементvghjg "p"');
//});

