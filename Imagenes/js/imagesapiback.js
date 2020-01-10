//Pagina 2
//Consumir API de imagenes metodo get
var accessKey='af6f67378e5414cca3b6b87019d0e969fe480e62bd6c40e879c9d94a8fdbbe5f';
var endPoint='https://api.unsplash.com/search/photos'

function getImages(query){
    return new Promise(function(resolve,reject){
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if (this.readyState==4 && this.status==200){
                var respuesta=JSON.parse(xhttp.responseText);
                var imagesList=respuesta.results;
                if(imagesList.length !== 0){
                    resolve(imagesList);+
                }else{
                    reject('No existe la palabra en la base de datos');
                } 
            }
        };
        xhttp.open("GET",endPoint + '?query=' + query + '&client_id=' + accessKey,true);
        xhttp.send();
    });
}
            
function imagen(imagesList){
    console.log(imagesList);
    for(var i = 0 ; i<4; i++){
       $('#tableImage'+i).attr('src',imagesList[i].urls.thumb);
   }
}

function cambiarImagen(Query){
    getImages(Query)
    .then(function(value){
        imagen(value);
    })
    .catch(function(value){
        alert(value);
    });
}

cambiarImagen('dog')

console.log(queryApi);
$('#updateImage').on('click',function(){
    var queryApi=$('#queryApi').val();
    cambiarImagen(queryApi);
});

