function clearHeader() {
    const h1 = document.querySelector("h1");
    h1.remove();
}

// clearHeader();

function removeItem1() {
    // const firstItem = document.querySelector("li:first-child");
    // firstItem.remove();

    const ul = document.querySelector("ul");
    const firstItem = document.querySelector("li:first-child");

    ul.removeChild(firstItem);
}

function removeItem(number) {
    const ul = document.querySelector("ul");
    const item = document.querySelector(`li:nth-child(${number})`);

    ul.removeChild(item);
}

// removeItem1();
// removeItem(2);

function removeAll() {
    // const ul = document.querySelector("ul");
    // ul.innerHTML = "";
    
    // 2.yontem
    const ul = document.querySelector("ul"); 
    while(ul.firstChild) {
        // ul.removeChild(ul.firstChild);

        ul.firstChild.remove();
    }
}

removeAll();