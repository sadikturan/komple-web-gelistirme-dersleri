const first = ()=>{
    console.log('first');
    second();
}

const second = ()=>{
    setTimeout(()=>{
        console.log('second');
    },2000);   
    third();
}

const third = ()=>{
    console.log('third');
}

first();