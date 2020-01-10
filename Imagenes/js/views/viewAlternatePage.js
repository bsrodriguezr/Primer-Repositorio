//view alternatePage
//Elementos de la Alternare Page
var divTableAlternatePage = document.createElement('div');
var divButtonInputAlternatePage = document.createElement('div');
var inputAlternatePage = document.createElement('input');
var buttonAlternateImage = document.createElement('button');
var tableImage=document.createElement('table');
var row = [];
var cell=[];
var image=[];

row[0]=document.createElement('tr');
row[1]=document.createElement('tr');

for(i=0; i<4; i++){
    cell[i]=document.createElement('td');
    image[i]=document.createElement('img');
    image[i].id='image'+i;
    $(image[i]).appendTo(cell[i]);

    if((i==0)||(i==1)){
        $(cell[i]).appendTo(row[0]);
    }else{
        $(cell[i]).appendTo(row[1]);
    }
}

for(var i=0; i<2 ; i++){
    $(row[i]).appendTo(tableImage);
}

$(tableImage).appendTo(divTableAlternatePage);
$(divTableAlternatePage).appendTo('#contentAlternatePage');

inputAlternatePage.id='inputSearchImage';
inputAlternatePage.type='text';
buttonAlternateImage.id='buttonSearchImage';
$(inputAlternatePage).appendTo(divButtonInputAlternatePage);
$(buttonAlternateImage).appendTo(divButtonInputAlternatePage);
$(buttonAlternateImage).text('Buscar imagenes');
$(divButtonInputAlternatePage).appendTo('#contentAlternatePage');


controllerAlternatePage();