 //1) Create variable
var validFirstname=false;

//2) read value from HTML
var firstname = document.getElementById("FirstName").value;

//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;

//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);


//1) Create variable
var validLastname=false;

//2) read value from HTML
var lastname = document.getElementById("LastName").value;

//3) Do validation
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
else
   validLastname = true;

//4) Send error message to HMTL
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname && validLastname);









var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req", "Please enter your Last Name");
 frmvalidator.addValidation("LastName","maxlen=50");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req", "Please enter your Email");

 frmvalidator.addValidation("Phone","maxlen=15");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Username","req");
 frmvalidator.addValidation("Username","maxlen=12");

 frmvalidator.addValidation("Password","req");
 frmvalidator.addValidation("Password","maxlen=7");

 frmvalidator.addValidation("Address","req");

 frmvalidator.addValidation("City","req");

 frmvalidator.addValidation("State","dontselect=000");

 frmvalidator.addValidation("Country","dontselect=000");

 frmvalidator.addValidation("ZipCode","maxlen=5");
