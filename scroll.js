

$('body').bind('mousewheel', function(e){
    console.log('entro');
    
    if(e.originalEvent.wheelDelta /120 > 0) {
        alert('up');
    }
    else{
        alert('down');
    }
});