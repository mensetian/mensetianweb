

$('body').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta);
    if (e.originalEvent.wheelDelta / 120 > 0) {
        alert('up');
    } else {
        alert('down');
    }
});