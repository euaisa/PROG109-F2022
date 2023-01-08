// store input numbers
function add()
 {
    var num1, num2, sum;
           num1 = parseInt(document.getElementById("firstnumber").value);
           num2 = parseInt(document.getElementById("secondnumber").value);
 
//add two numbers
sum = num1 + num2;

// display the sum
document.getElementById("answer").innerHTML = sum;
}