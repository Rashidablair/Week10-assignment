let id = 0;

document.getElementById('add').addEventListener('click',() => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-order-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-collect-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').vlaue = '';
});
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: test-${id}`);
        let elementToDelete = document.getElementById(`test-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}