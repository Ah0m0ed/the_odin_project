let prev = document.querySelector(".prev-op");
let curr = document.querySelector(".curr-op");
let calculator = document.querySelector(".buttons");
calculator.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeyDown);

function getPrev() {
    return prev.textContent;
}

function getCurr() {
    return curr.textContent;
}

function resetCurr() {
    curr.textContent = "0";
}

function resetPrev() {
    prev.textContent = "0";
}

function setPrev(string) {
    if (prev.textContent == "0") {
        prev.textContent = `${string}`;
    } else {
        prev.textContent += `${string}`;
    }
}

function setCurr(string) {
    if (curr.textContent == "0") {
        curr.textContent = `${string}`;
    } else {
        curr.textContent += `${string}`;
    }
}

function handleClick(e) {
    let id = e.target.id;
    const operators = ["+", "-", "X", "/"];
    switch (id) {
        case "add":
            if (!operators.includes(getLast()) && getPrev() != "0" && getCurr() != "0") {
                alert("Enter an operator !!");
                resetCurr();
                return;
            }
            if (getPrev() != "0") {
                calc();
            }
            return add();
        case "subtract":
            if (!operators.includes(getLast()) && getPrev() != "0" && getCurr() != "0") {
                alert("Enter an operator !!");
                resetCurr();
                return;
            }
            if (getPrev() != "0") {
                calc();
            }
            return subtract();
        case "multiply":
            if (!operators.includes(getLast()) && getPrev() != "0" && getCurr() != "0") {
                alert("Enter an operator !!");
                resetCurr();
                return;
            }
            if (getPrev() != "0") {
                calc();
            }
            return multiply();
        case "divide":
            if (!operators.includes(getLast()) && getPrev() != "0" && getCurr() != "0") {
                alert("Enter an operator !!");
                resetCurr();
                return;
            }
            if (getPrev() != "0") {
                calc();
            }
            return divide();
        case "reset":
            return reset();
        case "del":
            return del();
        case "equal":
            return calc();
        case "decimal":
            return decimal();
        default:
            if (e.target.type == "button") {
                return setCurr(e.target.textContent.trim());
            }
    }
}

function handleKeyDown(e) {
    let key = e.key;
    let keyMap = {
        "0": "0", "1": "1", "2": "2", "3": "3", "4": "4",
        "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
        "+": "add", "-": "subtract", "*": "multiply", "/": "divide",
        "Enter": "equal", "Backspace": "del", " ": "reset", ".": "decimal",
    }
    let operations = ["add", "subtract", "multiply", "divide",
        "equal", "del", "reset", "decimal"];
    
    if(keyMap[key]){
        e.preventDefault();
        let id = keyMap[key];
        if(operations.includes(id)){
            document.getElementById(id)?.click();
        }else{
            setCurr(keyMap[key]);
        }
    }
}

function getLast() {
    let last = getPrev();
    return last.charAt(last.length - 1);
}

function add() {
    if (getCurr() == "0") {
        setPrev(" +");
    } else {
        setPrev(getCurr() + " +");
    }
    resetCurr();
}

function subtract() {
    if (getCurr() == "0") {
        setPrev(" -");
    } else {
        setPrev(getCurr() + " -");
    }
    resetCurr();
}

function multiply() {
    if (getCurr() == "0") {
        setPrev(" X");
    } else {
        setPrev(getCurr() + " X");
    }
    resetCurr();
}

function divide() {
    if (getCurr() == "0") {
        setPrev(" /");
    } else {
        setPrev(getCurr() + " /");
    }
    resetCurr();
}

function calc() {
    let operator = getLast();
    let firstNum = getPrev().slice(0, getPrev().length - 2);
    firstNum = parseFloat(firstNum);
    let secondNum = parseFloat(getCurr());
    let result = null;
    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "X":
            result = firstNum * secondNum
            break;
        case "/":
            if (secondNum == 0) {
                alert("Cant divide by zero !");
                reset();
                return;
            }
            result = firstNum / secondNum;
            break;
        default:
            return;
    }
    result = Math.round(result * 100000000) / 100000000;
    reset();
    setPrev(result.toString());
}

function reset() {
    resetCurr();
    resetPrev();
}

function del() {
    let curr = getCurr();
    if (curr.length == 1) {
        resetCurr();
    } else {
        resetCurr();
        setCurr(curr.slice(0, -1));
    }
}

function decimal() {
    let curr = getCurr();
    if (!curr.includes(".")) {
        if (curr == "0") {
            setCurr("0.");
        } else {
            setCurr(".");
        }
    }
}
