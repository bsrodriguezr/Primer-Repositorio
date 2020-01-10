//Pagina 1
// window.onload(otherImage);
$(document).ready(otherImage);
$('#changeImage').on('click',otherImage);

function otherImage(){
    console.log('Hola Mundo');
    var legendImage=Math.floor(Math.random()*10);
    $('#image').attr('src','imagenesprueba/imagen'+legendImage+'.jpg');
    console.log(legendImage);
}

$('#changePage').on('click',function(){
    $.mobile.changePage('#alternPage');
});

        