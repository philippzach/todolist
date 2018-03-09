var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('li');
var delButton;
// var delButton = document.createElement("button");
// var delButtonText = document.createTextNode("Delete X");
// delButton.appendChild(delButtonText);

//Create Button and append to parent (li)
function deleteButton (parent) {
	delButton = document.createElement("button");
	var delButtonText = document.createTextNode("Delete X");
	delButton.appendChild(delButtonText);
	delButton.className = "button";
	parent.appendChild(delButton);
	//updateDeleteButton();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	deleteButton(li);
	delButton = document.querySelectorAll(".button")
	updateDeleteButton();
	input.value = "";
	//Event Listener to new li
	li.addEventListener("click", toggleDone);
	// li.appendChild(delButton);

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
function toggleDone() {
	this.classList.toggle('done');
}

function updateDeleteButton() {
	for (var i = 0; i < delButton.length; i++) {
		delButton[i].addEventListener('click', function () {
			this.parentNode.remove();
		})
	};
}

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener('click', toggleDone);
	deleteButton(list[i])
}

//delButton.addEventListener('click', removeListing)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

delButton = document.querySelectorAll(".button")
updateDeleteButton();
