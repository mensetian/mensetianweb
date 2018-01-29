/*
 Created on : 12-jul-2016, 8:52:46
 Author     : Sebastian F. Mena
 */


function animacionScroll() {

    var docHeight = $(document).height();
    var winHeight = $(window).height();

    var tierraWidth = $('#tierra').width();
    var lunaWidth = $('#luna').width();

    var tierraOffset = $('#tierra').offset();

    var scrollAux = 0;
    var switcher = 0;
    var switchor = 0;
    var nueva = 0;

    $(window).scroll(function () {

        var scrollTop = $(this).scrollTop();
        var scrollPer = (scrollTop * 100) / docHeight;
        var tierraVal, tierraFinal, lunaVal, lunaFinal, tierraOffsetVal;

        /* Animacion Tierra  */
        /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

        if (scrollTop >= winHeight) {

            if (switcher === 0) {
                scrollAux = scrollPer;
                switcher = 1;
            }

            tierraVal = (tierraWidth * ((scrollPer - scrollAux) * 2)) / 100;
            tierraFinal = tierraWidth - tierraVal;

            tierraOffsetVal = (winHeight * ((scrollPer - scrollAux) * 5)) / 100;

            console.log(tierraOffset.top, tierraOffsetVal);

            if (tierraFinal <= tierraWidth && tierraOffsetVal <= 1000) {
                $(this).scrollTop(winHeight);
//                $('#tierra').offset({top: tierraOffset.top + tierraOffsetVal});
                $('#tierra').width(tierraFinal);
            }
        } else {
            $('#tierra').width(tierraWidth);
        }

        /* Animacion Luna  */
        /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

        if (scrollTop >= (winHeight * 2)) {

            if (switchor === 0) {
                nueva = scrollPer;
                switchor = 1;
            }

            lunaVal = (lunaWidth * ((scrollPer - nueva) * 20)) / 100;

            lunaFinal = lunaWidth + lunaVal;


            if (nueva === 30) {
                $('#luna').width(lunaFinal);
            }

        } else {
            $('#luna').width(lunaWidth);
        }


    });


////        /* Animacion Letras  */
////        /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
////
////        if ($('.titulo').is(':within-viewport')) {
////
////            $(".titulo").addClass('desvanecer');
////            $.each($('.box'), function (i, el) {
////
////                setTimeout(function () {
////                    $(el).addClass('desvanecer');
////                }, 200 + (i * 200));
////            });
////            setTimeout(function () {
////
////                $("#descripcion").addClass('desvanecer');
////                setTimeout(function () {
////                    $("#foto_perfil").addClass('desvanecer');
////                }, 700);
////            }, 700);
////        }
////
////
//    });
}

