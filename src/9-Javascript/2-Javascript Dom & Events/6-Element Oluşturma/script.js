// Creating Elements

// create element
const li = document.createElement('li');

// add class
li.className='list-group-item list-group-item-secondary';

// attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

// text node
const text = document.createTextNode('new item');
li.appendChild(text);

const a = document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>';

// append a to li
li.appendChild(a);

// append li to ul
document.querySelector('#task-list').appendChild(li);



console.log(li);