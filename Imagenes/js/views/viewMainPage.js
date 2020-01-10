//view mainPage
//Imagen del div
var divImageMainPage = document.createElement('div');
var divButtonMainPage = document.createElement('div');
var imagenMainPage = document.createElement('img');
var buttonUpdateImage = document.createElement('button');
var buttonChangePage = document.createElement('button');

divImageMainPage.id = 'divImageMainPage';
divButtonMainPage.id = 'divButtonMainPage';
imagenMainPage.id = 'imagenMainPage';
buttonUpdateImage.id ='buttonUpdateImage';
buttonChangePage.id ='buttonChangePage';
buttonChangePage.text ='Cambiar Pagina';

document.getElementById('contentMainPage').append(divImageMainPage);
document.getElementById('contentMainPage').append(divButtonMainPage);
document.getElementById('divImageMainPage').append(imagenMainPage);
document.getElementById('divButtonMainPage').append(buttonUpdateImage);
document.getElementById('divButtonMainPage').append(buttonChangePage);
document.getElementById('buttonChangePage').innerHTML='Cambiar Pagina';
document.getElementById('buttonUpdateImage').innerHTML='Actualizar Imagen';

controllerMainPage();

    


