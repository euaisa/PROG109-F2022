let table = prompt("Hi, there! Enter a number from 0 to 10 : ");

if (person != null) {
  document.getElementById("blackboard").innerHTML =
function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
  while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  return msg;
}
