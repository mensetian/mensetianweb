

$('body').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta);
        $('body span').addClass('animado');
    setTimeout(function () {
        $('body span').removeClass('animado');
    }, 300);
    if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log('up');
    } else {
        $('body span');
        console.log('down');
    }
});