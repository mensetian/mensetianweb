

$('body').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta);
    $('body span').addClass('animado').removeClass('animado');
    if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log('up');
    } else {
        $('body span');
        console.log('down');
    }
});