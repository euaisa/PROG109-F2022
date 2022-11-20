function clearScreen (event) {
    var divs = document.getElementsByTagName("div");
    for (var index = divs.length - 1; index >= 0; index--) {
        divs[index].parentNode.removeChild(divs[index]);
    }
    event.stopPropagation();
}

function ignoreClicks(event){
    event.stopPropagation();
}

function addDot(event) {
    var dot = document.createElement("div");
    let radius = document.getElementById("radius").value;
    dot.className = "dot";
    dot.style.left = (event.pageX - radius) + "px";
    dot.style.top = (event.pageY - radius) + "px";
    dot.style.background = document.getElementById("color").value;
    dot.style.width = (radius * 2) + "px";
    dot.style.height = (radius * 2) + "px";
    document.body.appendChild(dot);
}

var  clear = document.querySelector("button");

clear.addEventListener("click", clearScreen);

document.getElementById("color").addEventListener("click", ignoreClicks);
document.getElementById("radius").addEventListener("click", ignoreClicks);
document.addEventListener("click", addDot);
