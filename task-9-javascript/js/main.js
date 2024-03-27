let formData = document.getElementById("formdata");

formData.addEventListener("submit", (event) => {
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num").value);
    let splitNum = parseInt(document.getElementById("splitnum").value);

    // resetting the resultants divs
    resettingDivs();

    // Validating inputs
    if (!validatingInputs(splitNum, num1)) {
        return;
    }

    // finding the arrays values
    const arr = new Array(splitNum);
    arr.fill(0);
    let count = 0;
    for (let i = 0; i <= splitNum; i++) {
        if (i == splitNum) {
            i = -1;
        } else {
            arr[i] = arr[i] + 1;
            count += 1;
            if (count == num1) {
                break;
            }
        }
    }
    divsGenerator(arr);
});

// Random Color Generator
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Reseting Inputs and Divs
function validatingInputs(splitNum, num1) {
    document.getElementById("errorMsg").textContent = "";
    // number should be greater than 0
    if (splitNum <= 0 || num1 <= 0) {
        document.getElementById("errorMsg").textContent =
            "Both Numbers should be greater than zero";
        return false;
    }
    // split number should be less than main-number;
    if (splitNum > num1) {
        document.getElementById("errorMsg").textContent =
            "Number should be greater than no. of splits";
        return false;
    }
    return true;
}

// Resetting the Divs
function resettingDivs() {
    // reseting the result divs
    var checkRc = document.getElementById("result-container");
    if (checkRc != null) {
        var checkBo = document.getElementById("main-container");
        checkBo.removeChild(checkRc);
    }
}

function divsGenerator(arr) {
    // creating divs
    // crating parent div
    var rc = document.createElement("div");
    rc.setAttribute("id", "result-container");
    rc.setAttribute("class", "d-flex");

    // creating child divs
    for (let i = 0; i < arr.length; i++) {
        var rd = document.createElement("div");
        rd.setAttribute("id", "rd");
        rd.style.width = arr[i] * 100 + "%";
        rd.style.height = "100px";
        rd.style.background = getRandomColor();
        rd.style.color = "white";
        rd.style.border = "1px solid black";
        rd.style.textAlign = "center";
        rd.style.fontSize = "2rem";
        rd.innerHTML = arr[i];
        // appending child div to parent div
        rc.appendChild(rd);
    }

    // appending parent div to main body container
    document.getElementById("main-container").appendChild(rc);
}
