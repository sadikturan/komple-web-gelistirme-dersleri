function createListItem(text) {
    const li = document.createElement("li");

    li.className = "item";
    li.id = "item1";
    li.setAttribute("data-id", "5");
    li.innerText = text;

    const ch = document.createElement("input");
    ch.type = "checkbox";
    ch.className = "ch1";

    li.appendChild(ch);

    document.getElementById("myList").appendChild(li);
}

// createListItem("item 4");
// createListItem("item 5");

function createListItem2(text) {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML =  `${text} <input type="checkbox">`;

    document.getElementById("myList").appendChild(li);
}

createListItem2("item 4");
createListItem2("item 5");
