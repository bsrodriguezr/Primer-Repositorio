
$('#promesa').on('click',function(){
    var myPromise = new Promise(function(resolve, reject) {
        var a=parseInt($('#numberOne').val());
        var b=parseInt($('#numberTwo').val());
        console.log(a)
        if (a!=0 && b!=0){
            resolve(a+b);
        }else{
            reject('a o b es nulo')
        }
    });

    myPromise.then(function(value) {
    console.log(value);
    return value
    }).then(function(response){
        if (response<10){
            console.log(response+' es menor que 10');
        }else{
            console.log(response+' es mayor que 10')
        }
    }).catch(function(value){
        alert(value);
    });
    // console.log(myPromise);
});



