function checkForm(form) {
		var errors=[];
		var rePhone=/^[6-9]{1}[0-9]{9}$/;
		var reName =/^[\w ]+$/;
		if(!rePhone.test(form.phoneNumber.value))
		{
			errors.push("Invalid Phone Number!");
		}


		if(form.name.value=="")
		{
			//alert("Error: Input Name is Empty!");
			//form.name.focus();
			//return false;
			errors.push("Input Name is Empty!");
		}
	
	
		
		else
		{
			if(!reName.test(form.name.value))
			{errors.push("Input Name contains invalid characters!");}
			//alert("Error: Input Name contains invalid characters!");
			//form.name.focus();
			//return false;
			
		}
		if(errors.length>0)
		{var msg="ERRORS:\n\n"
	     for (var i = 0; i <errors.length; i++) 
	       {msg+=errors[i]+"\n";}
	      alert(msg);
	      return false;

		}
		return true;

}