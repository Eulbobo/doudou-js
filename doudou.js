var errorSaisieValidation = false;
var errorMessageSeparator = '';

	function validateField(field, message){
		if (field.value == "") {
			displayError(message);
		}
	}
	
	function displayError(message){
		if (errorSaisieValidation){
    		errorMessageSeparator = '\n';
    	}
		document.getElementById("erreurs").value = document.getElementById("erreurs").value + errorMessageSeparator + message;
		errorSaisieValidation = true;
	}
	
	function beforeValidation(){
		document.getElementById("erreurs").value = '';
		errorSaisieValidation = false;
		errorMessageSeparator = '';
	}
	
	function hasNoErrors(){
		return !errorSaisieValidation;
	}