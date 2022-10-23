table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hi, there! Enter a number from 0 to 10 : ";
  return prompt(greetingMessage);
}

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
  while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
