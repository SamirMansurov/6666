export function Transaction(item, array) {

    const rowElement = document.createElement('tr');
    const idCell = document.createElement('td');
    const cardCell = document.createElement('td');
    const categoryCell = document.createElement('td');
    const totalCell = document.createElement('td');
    const dateCell = document.createElement('td');

  
    idCell.classList.add('table_cell');
    cardCell.classList.add('table_cell');
    categoryCell.classList.add('table_cell');
    totalCell.classList.add('table_cell');
    dateCell.classList.add('table_cell');

    idCell.textContent = item.id;
    cardCell.textContent = item.wallet;
    categoryCell.textContent = item.cat;
    totalCell.textContent = item.total;
    dateCell.textContent = item.createdAt;

  
    rowElement.append(idCell, cardCell, categoryCell, totalCell, dateCell);

    return rowElement;
}