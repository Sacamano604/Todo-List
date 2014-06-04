var addItem = function(itemToAdd){
	//console.log(itemToAdd);
	//document.getElementById('actualList').innerHTML = "<p> " + itemToAdd + " </p>";
	var tagCreate = document.getElementById('resultsTable');
	tagCreate.appendChild(document.createElement('tr'));
	tagCreate.className = 'bg-info';
	var item = document.getElementById('resultsTable');
	item.appendChild(document.createTextNode(itemToAdd));
	//document.getElementById('resultsTable').innerHTML = "<tr>" + itemToAdd + "</tr>";
}