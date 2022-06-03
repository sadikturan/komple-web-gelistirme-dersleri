// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

// class name
// document.getElementsByClassName()

let val;

//val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];

// val = document.getElementsByClassName('list-group-item')[2];

// val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }


// document.getElementsByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');


// document.querySelectorAll()

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent= `${index} - hello`;
// });

val = document.querySelectorAll('li:nth-child(even)');

val.forEach(function(item){
   item.style.background='#ccc';
});

console.log(val);




