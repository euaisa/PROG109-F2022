            // Unit of table

operator = GetValueFromUser("operator");
table = GetValueFromUser("table")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hi, there! ';
  if (valueType == "operator") {
    greetingMessage += "Enter + or *:";
  }
  else
  {
   var table = "Enter a number:";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
