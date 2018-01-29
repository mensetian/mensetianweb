/*
 Created on : 12-jul-2016, 8:52:46
 Author     : Sebastian F. Mena
 */


function Botones() {

    /* Icono Hamburguesa */
    $('.hamburger').click(function () {
        $(this).toggleClass('activo');
        $('nav').toggleClass('activo');
    });

    /* Hover Box */
    $('.box').hover(function () {
        $(this).addClass('aparecer');
    });



}

