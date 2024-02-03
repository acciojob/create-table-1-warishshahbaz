function insert_Row() {
    //Write your code here
  let tabel = document.getElementById("sampleTable");
	let newRow = document.createElement("tr");
	let cell1 = document.createElement("td");
	let text1 = document.createTextNode = "New Cell1"
	cell1.appendChild(text1);
	let cell2 = document.createElement("td");
	let text2 = document.createTextNode = "New Cell2";
	cell2.appendChild(text2);
	newRow.appendChild(cell1);
	newRow.appendChild(cell2);
	tabel.append(newRow);
  
}
