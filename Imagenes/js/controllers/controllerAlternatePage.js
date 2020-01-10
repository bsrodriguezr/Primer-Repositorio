//controller Alternate Page
function controllerAlternatePage(){
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
                        resolve(imagesList);
                    }else{
                        reject('No existe la palabra en la base de datos');
                    } 
                }
            };
            xhttp.open("GET",endPoint + '?query=' + query + '&client_id=' + accessKey,true);
            xhttp.send();
        });
    }
                
    function image(imagesList){
        console.log(imagesList);
        for(var i = 0 ; i<4; i++){
        $('#image'+i).attr('src',imagesList[i].urls.thumb);
        }
    }

    function changeImage(Query){
        getImages(Query)
        .then(function(value){
            image(value);
        })
        .catch(function(value){
            alert(value);
        });
    }

    changeImage('dog');

    $('#buttonSearchImage').on('click',function(){
        var queryApi=$('#inputSearchImage').val();
        changeImage(queryApi);
    });
}
