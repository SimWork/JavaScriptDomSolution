var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");



////////////////////////////////////////////////////////////////////////////////////////
// function which toggles the done class of each li
////////////////////////////////////////////////////////////////////////////////////////
function clickToggle() {
	if(event.target.tagName === "LI") { // prevent button from toggling class
		event.target.classList.toggle("done");
		console.log(event.target.tagName);
	}
}
////////////////////////////////////////////////////////////////////////////////////////
// function which deletes the corresponding li 
////////////////////////////////////////////////////////////////////////////////////////
function deleteLI() {
	//console.log(event.target.parentNode.parentNode.removeChild(event.target.parentNode));
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	//event.target.parentNode.parentNode
}


////////////////////////////////////////////////////////////////////////////////////////
// loop through list array and assign each li a click eventListener and a delete button
////////////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < list.length; i++) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("DELETE"));
	list[i].appendChild(deleteButton);
	list[i].addEventListener("click", clickToggle);
	deleteButton.addEventListener("click", deleteLI);
}

function inputLength() {
	return input.value.length;
}

////////////////////////////////////////////////////////////////////////////////////////
// changes to this part of the code are just adding a delete button whenever
// a new li element is added and hooking that delete button up with an event 
// listener
////////////////////////////////////////////////////////////////////////////////////////
function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	
	deleteButton.appendChild(document.createTextNode("DELETE"));
	deleteButton.addEventListener("click", deleteLI);

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);