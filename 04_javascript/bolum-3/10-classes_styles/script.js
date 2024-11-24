const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const items = document.querySelectorAll(".items li");

function fn() {
    console.log(h1.className);
    console.log(h1.classList);

    // h1.className = "title f22";
    // h1.classList.add("red");
    // h1.classList.remove("f20");
    // h1.classList.toggle("red");
    // h1.classList.replace("f20","f22");

    for(let i = 0; i < items.length; i++) {
        // items[i].classList.toggle("active");
        items[i].style.color = "green";
        items[i].style.fontSize = "20px";
        items[i].style.padding = "10px";
    }
}

button.addEventListener("click", fn);