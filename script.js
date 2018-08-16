//these are used to find items in HTML
var button = document.getElementById("add");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var item = ul.getElementsByTagName("li");

//function below helps with the input length
function inputLength() {
  return input.value.length;
}

//function below helps with adding a new element to the list
function addToList() {
  var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeFromList;
  btn.classList.add("deleteBtn");

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + "";
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";
}

//function below helps with removing an element from the list
function removeFromList(event) {
  event.target.removeEventListener("click", removeFromList, false);
  event.target.parentNode.remove();
}

//function to strikethrough done items
ul.onclick = function(event) {
  var target = event.target;
  target.classList.toggle("done");
}


//button below is clicked and adds to the list
button.addEventListener("click", function() {
  if (inputLength() > 0) {
    addToList();
  }
})

//when you press enter, you also add to the list
input.addEventListener("keypress", function(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addToList();
  }
})
