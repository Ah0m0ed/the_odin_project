let sketch = document.querySelector(".sketch");
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", function (e) {
    switch (e.target.id) {
        case "start":
            start();
            break;
        case "reset":
            reset();
            break;
        case "shading":
            if (!isEmpty()) {
                shading();
            } else {
                alert("Create A Grid First !!");
            }
            break;
        case "rainbow":
            if (!isEmpty()) {
                rainbow();
            } else {
                alert("Create A Grid First !!");
            }
    }
});

function start() {
    let grid = parseInt(prompt("Enter a number from 2 to 100 :"));
    sketch.innerHTML = '';
    if (grid <= 100 && grid >= 2) {
        for (let i = 0; i < grid; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < grid; j++) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.style["background-color"] = "white";
                row.appendChild(square);
            }
            sketch.appendChild(row);
        }
        let startBtn = document.querySelector("#start");
        startBtn.textContent = "New Grid";
    } else {
        alert("Please Enter A Valid Number !!");
        return
    }
}
function reset() {
    let squars = document.querySelectorAll(".square");
    for(let square of squars){
        square.style["background-color"] = "white";
    }
}
function shading() {
    setBtnColor("shading");
    resetBtnColor("rainbow");
    reset();
    let squares = document.querySelectorAll(".square");
    for(const square of squares){
        if(!square.dataset.brightness){
            square.dataset.brightness = "100";
        }
        square.addEventListener("mouseenter" , function(){
            let currentBrightness = parseInt(square.dataset.brightness);
            let newBrightness = Math.max(currentBrightness - 10 , 0);

            square.dataset.brightness = newBrightness.toString();
            square.style["background-color"] = `rgb(${newBrightness}% ${newBrightness}% ${newBrightness}%)`;
        });
    }
}
function rainbow() {
    setBtnColor("rainbow");
    resetBtnColor("shading");
    reset();
    let squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseenter", function (e) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r} ${g} ${b})`;
        });
    }
}

function isEmpty() {
    return document.querySelectorAll(".square").length === 0;
}

function setBtnColor(btnId) {
    let btn = document.querySelector(`#${btnId}`);
    btn.style["color"] = "white";
    btn.style["background-color"] = "black";
    btn.classList.add('btn-active');
}

function resetBtnColor(btnId) {
    let btn = document.querySelector(`#${btnId}`);
    btn.classList.remove('btn-active');
    btn.style["color"] = "black";
    btn.style["background-color"] = "white";
}
