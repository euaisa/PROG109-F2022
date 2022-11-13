function addItem() {
var newItem = document.getElementById('items').value;
var newEl = document.createElement('li');
var newText = document.createTextNode(newItem);
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);
}

var btn = document.getElementById('btnAddElement');
btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  var newInput = document.getElementById('items');
  console.log(newInput.value);
  newInput.value = '';
});
