const mesaj = document.getElementById("mesaj");
const button = document.querySelector("button");
const buttonContainer = document.getElementById("buttons");

function mesajGoster() {
    console.log(mesaj.value);
    mesaj.value = "";
}

function mesajGoster2() {
    console.log("mesaj 2");
}

button.addEventListener("click", mesajGoster);
button.addEventListener("click", mesajGoster2);

for(let i = 1; i <= 5; i++) {
    let button = document.createElement("button");
    button.id = "btn" + i;
    button.innerText = "button " + i;
    button.addEventListener("click", mesajGoster);

    buttonContainer.appendChild(button);
}

document.getElementById("btn1").removeEventListener("click", mesajGoster);