var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){

        if(xhr.status === 200){
            console.log(xhr.responseText);
        }else if (xhr.status === 404){
            console.log('kaynak bulunamadı.')
        }
    }
}

xhr.onprogress = function(){
    console.log('on progressing');
}


xhr.open('GET','msg.txt',true);
xhr.send();

console.log('hello');


/*
 readyState :

0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready


status :

200: "OK"
403: "Forbidden"
404: "Not Found"

*/
