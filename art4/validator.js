function ValidateForm() {
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPhoneNumber = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = false;

    var letters = /^[A-Za-z]/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformat = /^[0-9_\-]+$/i;
    var passwordformat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/;

    var errorMessages = ""; 
    
    if (myContact.firstname.value.length > 20 ||
        myContact.firstname.value === null ||
        myContact.firstname.value === "" ||
        !myContact.firstname.value.match(letters)) {

        myContact.firstname.focus();
        errorMessages += "<p>The firstname must be less than 20 characters and it is required. Only letters are accepted.</p>";
    }

    else
        validFirstName = true;

    if (myContact.lastname.value.length > 50 ||
        myContact.lastname.value === null ||
        myContact.lastname.value === "" ||
        !myContact.lastname.value.match(letters)){

        myContact.lastname.focus();
        errorMessages += "<p>The lastname must be less than 50 characters and it is required. Only letters are accepted.</p>";
    }

    else
        validLastName = true;


    if (myContact.email.value === null ||
        myContact.email.value === "" ||
        !myContact.email.value.match(mailformat)){

        myContact.email.focus();
        errorMessages += "<p>Email is required. You have entered an invalid email address. </p>";
    }   

    else
        validEmail = true;

    
    if (myContact.phone.value.length > 15 ||
        myContact.phone.value === null ||
        myContact.phone.value === "" ||
        !myContact.phone.value.match(phoneformat)){

        myContact.phone.focus();
        errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers and dashes accepted.</p>";
    }

    else
        validPhoneNumber = true;


    if (myContact.username.value.length > 12 ||
        myContact.username.value === null ||
        myContact.username.value === ""){

        myContact.username.focus();
        errorMessages += "<p>The username must be less than 12 characters and it is required.</p>";
    }

    else
        validUsername = true;


    if (myContact.password.value.length > 7 ||
        myContact.password.value === null ||
        myContact.password.value === "" ||
        !myContact.password.value.match(passwordformat)){

        myContact.password.focus();
        errorMessages += "<p>The password must be less than 7 characters and it is required. Password requires 1 upper-case, 1 lower-case, 1 numeric, 1 special character.</p>";
    }

    else
        validPassword = true;



    if (myContact.address.value === null ||
        myContact.address.value === ""){

        myContact.firstname.focus();
        errorMessages += "<p>The address is required.</p>";
    }

    else
        validAddress = true;

 
    if (myContact.city.value === null ||
        myContact.city.value === ""){

        myContact.firstname.focus();
        errorMessages += "<p>The city is required.</p>";
    }

    else
        validCity = true;


    if (myContact.state.value === null ||
        myContact.state.value === ""){

        myContact.firstname.focus();    
        errorMessages += "<p>The state is required.</p>";
    }

    else
        validState = true;


    if (myContact.country.value === null ||
        myContact.country.value === ""){

        myContact.firstname.focus();
        errorMessages += "<p>The country is required.</p>";
    }

    else
        validCountry = true;


    if (myContact.country.value === "USA" &&
        myContact.zipcode.value.length !== 5){

        myContact.firstname.focus();
        errorMessages += "<p>The zipcode must have 5 digits.</p>";
    }

    else
        validZipcode = true;

    document.getElementById("errorMessages").innerHTML = errorMessages;
    return (validFirstName && validLastName && validEmail && validPhoneNumber && validUsername && validPassword &&
        validAddress && validCity && validState && validCountry && validZipcode);
}
