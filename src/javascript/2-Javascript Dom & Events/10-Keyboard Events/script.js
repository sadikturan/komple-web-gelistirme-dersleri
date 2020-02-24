// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('keypress',eventHandler);
// input.addEventListener('focus',eventHandler);
// input.addEventListener('blur',eventHandler);
// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler);
// form.addEventListener('submit',eventHandler);

select.addEventListener('change',eventHandler);

function eventHandler(e){
       console.log('event type '+ e.type);
    // console.log('key code :'+e.keyCode);
       console.log('value :'+e.target.value);

    // e.target.style.backgroundColor='yellow';

    e.preventDefault();
}