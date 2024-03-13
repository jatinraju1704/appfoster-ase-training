
let formData = document.getElementById("formdata");

formData.addEventListener("submit", (event) => {
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num").value);
    let splitnum = parseInt(document.getElementById("splitnum").value);
    
    // resetting the resultants divs
    ResettingDivs();

    // Validating inputs
    if(!ValidatingInputs(splitnum, num1))
    {
        return;
    }

    // finding the arrays values
    const arr=new Array(splitnum);
    arr.fill(0);
    let count=0;
    for(let i=0; i<=splitnum; i++)
    {
        if(i == splitnum)
        {
            i = -1;
        } else {
            arr[i] = arr[i] + 1;
            count += 1;
            if(count == num1)
            {
                break;
            }
        }
    }
    divsGenerator(arr);
});

// Random Color Generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Reseting Inputs and Divs
function ValidatingInputs(splitnum, num1) {
    document.getElementById("errorMsg").textContent = "";
    // number should be greater than 0
    if(splitnum == 0 || num1 == 0)
    {
        document.getElementById("errorMsg").textContent = "Both Numbers should be greater than zero";
        return false;
    }
    // split number should be less than main-number;
    if(splitnum > num1)
    {
        document.getElementById("errorMsg").textContent = "Number should be greater than no. of splits";
        return false;
    }
    return true;
}


// Resetting the Divs
function ResettingDivs() 
{
    // reseting the result divs
    var checkRc = document.getElementById("result-container");
    if(checkRc != null)
    {
        var checkBo =  document.getElementById('main-container');
        checkBo.removeChild(checkRc);
    }
}

function divsGenerator(arr){
    // creating divs
    // crating parent div
    var rc = document.createElement('div');
    rc.setAttribute("id", "result-container");
    rc.setAttribute("class","d-flex");

    // creating child divs
    for(let i=0; i<arr.length; i++)
    {
        var rd = document.createElement('div');
        rd.setAttribute("id","rd");
        rd.style.width = arr[i] * 10 +"%";
        rd.style.height = "100px";
        rd.style.background = getRandomColor();
        rd.style.color = "white";
        rd.style.border="1px solid black";
        rd.style.textAlign= "center";
        rd.style.fontSize= "2rem";
        rd.innerHTML = arr[i];
        // appending child div to parent div
        rc.appendChild(rd);
    }

    // appending parent div to main body container
    document.getElementById('main-container').appendChild(rc);
}
  