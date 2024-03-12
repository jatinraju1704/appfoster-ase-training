// how pagination works
let data;

async function getUsersData() {
    // document.getElementById('msg').textContent = 'Loading Data!';
    let response = await fetch(`https://gorest.co.in/public/v2/users`);
    data = await response.json();
    document.getElementById('msg').innerHTML='';
    return data;
}

getUsersData().then(
    data => { 
        console.log('getting data');
        data.forEach(element => {
            // div
            var d = document.createElement('div');
            d.setAttribute("class", "d-flex justify-content-between border border-bottom rounded-3 p-3");
            // span
            var sp = document.createElement('span');
            sp.setAttribute("id", element.id);
            sp.innerHTML = element.name;
            
            // button
            var bt = document.createElement('button');
            bt.setAttribute("type","submit");
            bt.setAttribute("value", element.id);
            bt.setAttribute("data-bs-toggle", "modal");
            bt.setAttribute("data-bs-target", "#infoModal");

            bt.style.backgroundColor="white";
            bt.style.border="none";
            
            //icon
            bt.setAttribute("class", "bi bi-eye-fill text-primary");
            
            bt.addEventListener('click', () => getUserDetails(element));

            // adding span, button into div
            d.appendChild(sp);
            d.appendChild(bt);
            
            // adding div to parent-container at html
            document.getElementById('parent-container').appendChild(d);
        });
    }
).catch(
        error =>{
            document.getElementById('msg').innerHTML= `Error : ${error}`;
        }
);
