const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
    console.log("onclick");
}

function onDblClick() {
    console.log("dblclick");
}

function onContextmenu() {
    console.log("onContextmenu");
}

function onMousedown() {
    console.log("onMousedown");
}

function onMouseenter() {
    console.log("onMouseenter");
}

function onMousemove() {
    console.log("onMousemove");
}

function onDrag() {
    console.log("onDrag");
}
function dragStart() {
    console.log("dragStart");
}

function dragEnd() {
    console.log("dragEnd");
}

div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDblClick);
div.addEventListener("contextmenu", onContextmenu);
div.addEventListener("mousedown", onMousedown);
div.addEventListener("mouseenter", onMouseenter);
div.addEventListener("mousemove", onMousemove);
img.addEventListener("drag", onDrag);
img.addEventListener("dragstart", dragStart);
img.addEventListener("dragend", dragEnd);