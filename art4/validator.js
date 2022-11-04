function validateForm() {

var errorMessages = []

var firstname = document.getElementById("FirstName").value;
if (document.myForm.firstname.value ==="null" || firstname==="" || firstname.length > 20) {
            errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
            document.myForm.firstname.focus() ;
            return false;
}


var lastname = document.getElementById("LastName").value;
if (lastname==="null" || lastname==="" || lastname.length > 50) {
            errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
            document.myForm.lastname.focus() ;
            return false;
}


var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
            errorMessages += "<p>Invalid email</p>";
            document.myForm.userEmail.focus() ;
            return false;
}


var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="") {
    errorMessages += "<p>Invalid phone number </p>";
    document.myForm.phone.focus() ;
    return false;
}


var Username = document.getElementById("Username").value;
if (Username==="null" || Username==="" || Username.length > 12) {
    errorMessages += "<p>The Username is required and cannot be greater than 12 characters</p>";
    document.myForm.Username.focus() ;
    return false;
}


var Password = document.getElementById("Password").value;
if (Password==="null" || Password==="" || Password.length > 12) {
    errorMessages += "<p>The Password is required and cannot be greater than 7 characters</p>";
    document.myForm.Password.focus() ;
    return false;
}


var Address = document.getElementById("Address").value;
if (Address==="null" || Address==="") {
            errorMessages += "<p>The Address is required</p>";
            document.myForm.Address.focus() ;
            return false;
}


var City = document.getElementById("City").value;
if (City==="null" || City==="") {
    errorMessages += "<p>The City is required</p>";
    document.myForm.City.focus() ;
    return false;
}



var State = document.getElementById("State").value;
if (State==="null" || State==="") {
            errorMessages += "<p>The State is required</p>";
            document.myForm.State.focus() ;
            return false;
}



var Country = document.getElementById("Country").value;
if (Country==="null" || Country==="") {
            errorMessages += "<p>The Country is required</p>";
            document.myForm.Country.focus() ;
            return false;
}



var ZipCode = document.getElementById("ZipCode").value;
if (ZipCode==="null" || ZipCode==="" || ZipCode.length > 5) {
            errorMessages += "<p>The ZipCode is required and cannot be greater than 5 characters</p>";
            document.myForm.ZipCode.focus() ;
            return false;
}
return (true);
}
