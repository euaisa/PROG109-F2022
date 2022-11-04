<script  type="text/javascript">
 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=50");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

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


</script>
