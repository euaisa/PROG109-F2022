var validFirstname=false;
var firstname = document.getElementById("FirstName").value;

if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
document.getElementById("errorMessages").innerHTML = errorMessages;
return (validFirstname);


var validLastname = false;
var lastname = document.getElementById("LastName").value;
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
else
   validLastname = true;
document.getElementById("errorMessages").innerHTML = errorMessages;
return (validFirstname && validLastname);


validEmail = false;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
    errorMessages += "<p>Invalid email</p>";
else
   validEmail = true;
document.getElementById("Email").innerHTML = errorMessages;
return (validFirstname && validLastname && validEmail);


validPhone = false;
var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
    errorMessages += "<p>Invalid phone number </p>";
else
  validPhone = true;
document.getElementById("Phone").innerHTML = errorMessages;
return (validFirstname && validLastname && validEmail && validPhone);



validUsername = false;
var Username = document.getElementById("Username").value;
if (Username==="null" || Username==="" || Username.length > 12)
    errorMessages += "<p>The Username is required and cannot be greater than 12 characters</p>";
else
  validUsername = true;
document.getElementById("Username").innerHTML = errorMessages;
return (validFirstname && validLastname && validEmail && validPhone && validUsername);


validPassword = false;
var Password = document.getElementById("Password").value;
if (Password==="null" || Password==="" || Password.length > 12)
    errorMessages += "<p>The Password is required and cannot be greater than 7 characters</p>";
else
  validPassword = true;
document.getElementById("Password").innerHTML = errorMessages;
return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword);

