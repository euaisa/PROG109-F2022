var table = prompt('Hi, there! Enter a number between 0 and 10: ');
var i = 1;                              

var msg = '<h2>Multiplication Table</h2>';  
  while (i < 10) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
  }

var el = document.getElementById('blackboard');
el.innerHTML = msg;
