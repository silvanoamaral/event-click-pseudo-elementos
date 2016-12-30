$('.bmc-modal-backdrop').click(function(e) {
    if (e.offsetX > e.target.offsetLeft) {
        //console.info('click on element')
    }
    else{
       //console.info('click on ::before element');
    }

    //ou podemos usar 
    if (e.clientX > $(this).offset().left + 90 &&
        e.clientY < $(this).offset().top + 10) {
        //console.info('click on ::before element');                      
    }            
});