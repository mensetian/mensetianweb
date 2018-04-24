

$('body').bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        alert('up');
    }
    else{
        alert('down');
    }
});