// Traversing the Dom

let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // text 
val = list.childNodes[1].nodeType; // element

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;
//console.log(val);



for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}



