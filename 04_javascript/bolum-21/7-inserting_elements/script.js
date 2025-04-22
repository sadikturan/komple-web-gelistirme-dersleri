// 1- insertAdjacentElement

function insertElement() {
    const ul = document.querySelector("#myList");

    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacentElement";

    ul.insertAdjacentElement("beforebegin", h1);
}
// insertElement();

// 2- insertAdjacentText

function insertText() {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin", "insertAdjacentText");
}
// insertText();

// 3- insertAdjacentHTML
function insertHtml() {
    const item = document.querySelector("li:nth-child(2)");
    item.insertAdjacentHTML("beforeend", "<h2>insertAdjacentHTML</h2>");
}
// insertHtml();

// 4- insertBefore
function insertBefore() {
    const ul = document.querySelector("#myList");

    const li = document.createElement("li");
    li.textContent = "insertBefore";

    const secondLi = document.querySelector("li:nth-child(2)");

    ul.insertBefore(li, secondLi);
}

insertBefore();

/*
<!-- beforebegin -->  
    <div>
        <!-- afterbegin -->      
        item
        <!-- beforeend -->
    </div>
<!-- afterend -->
*/