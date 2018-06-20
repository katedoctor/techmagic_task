 window.onload = function(){
   document.body.style.backgroundColor = "rgb(221, 221, 221)";
 }

function renderTable(cols, rows) {
  let body = document.body;
  let table = document.createElement('TABLE');
  let tblbody = document.createElement('TBODY');
  let k = 1;
  body.innerHTML = '';

  for (let i=0; i<rows; i++) {
    let row = document.createElement('tr');
      for (let j=0; j<cols; j++) {
        let cell = document.createElement('td');
        cell.innerText = k;
        k++;
        row.appendChild(cell);
        cell.style.padding = '25px';
        cell.style.textAlign = 'center';
        cell.style.border = '2px solid black';
      }
    tblbody.appendChild(row);
  }
  table.appendChild(tblbody);
  body.appendChild(table);
  table.addEventListener('click', function (event) {
    if(event.target.nodeName == 'td') {
      alert(`bookmarks says\n ${event.target.innerText}`);
    }
  });

  table.style.borderCollapse = 'collapse';
  table.style.margin = '150px auto';
}




