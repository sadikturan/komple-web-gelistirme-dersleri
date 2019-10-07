var items = ['item 1','item 2','item 3','item 4'];


var list = document.querySelector('#myList');

items.forEach(function(item){
	
	var li =document.createElement('li');
	var t=document.createTextNode(item);	
	li.className='list-group-item';
	li.appendChild(t);	
	list.appendChild(li);
	
	
	var span = document.createElement('span');
	var text = document.createTextNode('\u00D7');
	span.className='close';
	span.appendChild(text);
	li.appendChild(span);
	
});


list.addEventListener('click',function(item){
	
	
	
    if(item.target.tagName==='LI'){
		console.log(item.target);
		item.target.classList.toggle('checked');
	}

});









