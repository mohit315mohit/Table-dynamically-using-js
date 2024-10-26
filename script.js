const tableContainer =document.createElement('table');
const createButton = document.getElementById('create');
createButton.addEventListener('click', function(e){
    e.preventDefault();
    const row = document.getElementById('row').value;
    const col = document.getElementById('col').value;
    
    const tableContainer = document.getElementById('table');
    const table = document.createElement('table');

    const tablehead = document.createElement('thead');
    const tablerow = document.createElement('tr');
    // const tableHeaderData =['explorin','explorin','explorin'];
    for(let i=0; i<col; i++){
        const th = document.createElement('th');
        th.textContent = `Explorin`;
        tablerow.appendChild(th);
    }
    tablehead.appendChild(tablerow);

    const tablebody = document.createElement('tbody');
    for(let i=0; i<row; i++){
        const tablerow = document.createElement('tr');
        for(let j=0; j<col; j++){
            const td = document.createElement('td');
            td.textContent = `Explorin`;
            tablerow.appendChild(td);
        }
        tablebody.appendChild(tablerow);
    }
    table.appendChild(tablebody);
    table.appendChild(tablehead);
    tableContainer.appendChild(table);


});