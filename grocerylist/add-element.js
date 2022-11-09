function addItem() {
var newItem = document.getElementById('items').value;
var newEl = document.createElement('li');
var newText = document.createTextNode(newItem);
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);
}
