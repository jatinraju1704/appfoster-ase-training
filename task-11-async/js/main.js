// how pagination works

// fetching the usersdata from api
let rowNumber = 10;

var rowNoInput = document.getElementById('rnum');
rowNoInput.addEventListener("change", function () {
    rowNumber = rowNoInput.value;
    if (rowNumber > data.length) {
        rowNoInput.value = data.length;
    }
    else {
        addingPagination(data);
        rowGenerator(data, 1);
    }
});


async function getUsersData() {
    let response = await fetch(`https://gorest.co.in/public/v2/users`);
    data = await response.json();
    return data;
}

getUsersData().then(
    data => {
        document.getElementById('msg').innerHTML = '';
        addingPagination(data);
        rowGenerator(data, 1);
    }
).catch(
    error => {
        document.getElementById('msg').innerHTML = `Error : ${error}`;
    }
);

// adding pagination
function addingPagination(data) {
    document.getElementById('pagesList').textContent = '';
    document.getElementById('pages').setAttribute('class', '');
    let quot = Math.floor(data.length / rowNumber);
    let rem = data.length % rowNumber;
    quot += rem == 0 ? 0 : 1;
    var pages = document.getElementById('pagesList');

    for (let i = 0; i < quot; i++) {
        var li = document.createElement('li');
        li.setAttribute("class", "page-item page-link");
        li.textContent = i + 1;
        li.addEventListener('click', () => rowGenerator(data, i + 1));
        pages.appendChild(li);
    }
}

function rowGenerator(data, num) {
    var r = num * rowNumber;
    var startIndex = r - rowNumber;
    var endIndex = r - 1;
    endIndex = endIndex >= data.length ? startIndex + (data.length % rowNumber) - 1 : endIndex;

    console.log(startIndex + " " + endIndex);
    // parent container clean
    document.getElementById('parent-container').textContent = '';

    for (let i = startIndex; i <= endIndex; i++) {
        // div
        var d = document.createElement('div');
        d.setAttribute("class", "d-flex justify-content-between border border-bottom rounded-3 p-3");
        // span
        var sp = document.createElement('span');
        sp.setAttribute("id", data[i].id);
        sp.innerHTML = data[i].name;

        // button
        var bt = document.createElement('button');
        bt.setAttribute("type", "submit");
        bt.setAttribute("value", data[i].id);
        bt.setAttribute("data-bs-toggle", "modal");
        bt.setAttribute("data-bs-target", "#infoModal");

        bt.style.backgroundColor = "white";
        bt.style.border = "none";

        //icon
        bt.setAttribute("class", "bi bi-eye-fill text-primary");

        bt.addEventListener('click', () => getUserDetails(data[i]));

        // adding span, button into div
        d.appendChild(sp);
        d.appendChild(bt);

        // adding div to parent-container at html
        document.getElementById('parent-container').appendChild(d);
    }
}
