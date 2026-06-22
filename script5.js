let table = document.getElementById("multiplicationTable");

table.style.borderCollapse = "collapse";
table.style.textAlign = "center";

for (let i = 1; i <= 10; i++) {
  let row = document.createElement("tr");

  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");

  cell1.textContent = i;
  cell2.textContent = i * 5;

  cell1.style.border = "1px solid black";
  cell2.style.border = "1px solid black";

  row.appendChild(cell1);
  row.appendChild(cell2);

  table.appendChild(row);
}