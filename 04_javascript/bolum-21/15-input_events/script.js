const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");
const select = document.getElementById("select");
const title = document.getElementById("title");

function onInput(e) {
    title.textContent = e.target.value;
}

function onFocus(e) {
    console.log("focus");
    input.style.outlineStyle = "solid";
    input.style.outlineWidth = "1px";
    input.style.outlineColor = "green";
}

function onBlur(e) {
    console.log("blur");
    input.style.outlineStyle = "none";
}

function onChange(e) {
    console.log(e.target.checked);
}

function onSelected(e) {
    console.log(e.target.value);
}

input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);
checkbox.addEventListener("change", onChange);
select.addEventListener("change", onSelected);