function validate(form){
    for (var i=0; i<form.length; i++){
        if (form[i].type.toLowerCase() == "text"){
            var the_text = form[i].value;
            var the_element = document.getElementById("error_message")
            if (the_text == "" || the_text == null){
                the_element.innerHTML = "Username is empty."
                the_element.style.color = "red";
                form[i].focus();
                return false;
            }
    
            var regular_exp = /^[\w ]+$/;
            
            if (!regular_exp.test(the_text)){
                the_element.innerHTML = "Username contains invalid characters.";
                the_element.style.color = "red";
                form[i].focus();
                return false;
            }
        }
        
        if (form[i].type.toLowerCase() == "password"){
            var the_pass = form[i].value;
            if (the_pass.length < 6){
                
                the_element.innerHTML = "Password must be at least 6 characters.";
                the_element.style.color = "red";
                
                form[i].focus();
                return false;
            }
        }
    }
    return true;
}
