const input = document.getElementById("text");

// function onKeyPress() { console.log("keypress"); }
// function onKeyUp() { console.log("onKeyUp"); }
// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);

function onKeyDown(e) { 
    
    // console.log(e);
    // console.log(e.key);
    // document.querySelector("h2").innerText += e.key;

    // if(e.key === 'Enter') {
    //     alert("enter tıklandı");
    // }

    // if(e.keyCode == 13) {
    //     alert("enter tıklandı");
    // }

    // if(e.repeat) {
    //     alert(`${e.key} tuşuna basıldı kaldı.`);
    // }

    if(e.ctrlKey && e.key === 'a') {
        alert("ctrl + a");
    }
}


input.addEventListener("keydown", onKeyDown);