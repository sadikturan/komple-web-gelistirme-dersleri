const div = document.querySelectorAll("div");

function onClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
}

div[0].addEventListener("click", onClick);
div[1].addEventListener("click", onClick);
div[2].addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", function(e) {

    e.preventDefault();
    
    console.log("link tıklandı");
});