var table = prompt("Hi, there! Enter a number from 0 to 10 : ");
var i = 1;               
var msg = '<h2>Multiplication Table</h2>';             
while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
var el = document.getElementById('blackboard');
el.innerHTML = msg;
