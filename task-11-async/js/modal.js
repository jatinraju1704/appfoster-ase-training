async function getUserData(id) {
    let response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    let data = await response.json();
    return data;
}

function getUserDetails(id) {
    getUserData(id).then(
        data => {
            console.log(data['id']);
            document.getElementById('modalTitle').textContent = `ID : ${data['id']}`;
            document.getElementById('u_name').textContent = `Name : ${data['name']}`;
            document.getElementById('u_gender').textContent = `Gender : ${data['gender']}`;
            document.getElementById('u_email').textContent = `Email : ${data['email']}`;
            document.getElementById('u_status').textContent = `Status : ${data['status']}`;
        }
    ).catch(
        error => {
            document.getElementById('msg').innerHTML = `Error : ${error}`;
        });
}
