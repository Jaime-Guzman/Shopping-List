var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

//removes delete and li item from the shopping List
function removeParent(event) {
  event.target.removeEventListener("click", removeParent);
  event.target.parentNode.remove();
}

//creating list elements and delete buttons on page
function createListElement() {
  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = removeParent;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.innerHTML = li.innerHTML + " ";
  li.appendChild(btn);
  ul.appendChild(li);
  input.value = "";
}

//on click and keypress for entering new items on list
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  event.target.classList.toggle("done");
}

//adding new items
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
