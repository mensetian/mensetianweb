

$('body').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta);
    if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log('up');
        $('body span').addClass('animado');
    } else {
        $('body span').removeClass('animado');
        console.log('down');
    }
});