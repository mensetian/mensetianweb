/*
 Created on : 27-sep-2016, 8:52:46
 Author     : Sebastian F. Mena
 */

function Scroll() {

    //iniciamos evento de scroll
    $(window).scroll(function () {

        //altura del scroll
        var scrollTop = $(this).scrollTop();
        //tamaño del documento
        var documentHeight = $(document).height();

        console.log(scrollTop);
    });
}