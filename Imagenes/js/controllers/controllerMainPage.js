//Controller mainPage
function controllerMainPage(){
    
    $('#mainPage').on('pagebeforeshow',otherImage);
    $('#buttonUpdateImage').on('click',otherImage);

    function otherImage(){
        var legendImage=Math.floor(Math.random()*10);
        $('#imagenMainPage').attr('src','imagenesprueba/imagen'+legendImage+'.jpg');
        // document.getElementById('imagenMainPage').src='imagenesprueba/imagen'+legendImage+'.jpg'
        console.log('La imagen escogida es: '+legendImage);
    }

    $('#buttonChangePage').on('click',function(){
        $.mobile.changePage('#alternatePage');
    });

}