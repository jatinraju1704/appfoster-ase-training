
function getUserDetails(element) {
    document.getElementById('modalTitle').textContent = `ID : ${element.id}`;

    document.getElementById('u_name').textContent = `Name : ${element.name}`;
    document.getElementById('u_gender').textContent = `Gender : ${element.gender}`;
    document.getElementById('u_email').textContent = `Email : ${element.email}`;
    document.getElementById('u_status').textContent = `Status : ${element.status}`;
}
