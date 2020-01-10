//Pagina 2
//Consumir API de imagenes metodo get
var accessKey='af6f67378e5414cca3b6b87019d0e969fe480e62bd6c40e879c9d94a8fdbbe5f';
var endPoint='https://api.unsplash.com/search/photos'

function getImages(query, callback){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200){
            var respuesta=JSON.parse(xhttp.responseText);
            var imagesList=respuesta.results;
            return callback(imagesList);
            
        }
    };
    xhttp.open("GET",endPoint + '?query=' + query + '&client_id=' + accessKey,true);
    xhttp.send();
}
            
function imagen(imagesList){
    console.log(imagesList);
    for(var i = 0 ; i<4; i++){
       $('#tableImage'+i).attr('src',imagesList[i].urls.thumb);
   }
}

function changeImage(response){
    if(response){
        imagen(response)
    }else{
        console.log('Error')
    }
}

getImages('dog', function(response){
   changeImage(response);
});

console.log(queryApi);
$('#updateImage').on('click',function(){
    var queryApi=$('#queryApi').val();
    getImages(queryApi, function(response){
        changeImage(response);
    });
});