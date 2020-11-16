let email = document.getElementById("email");
let pass = document.getElementById("pass");
let pass1 = document.getElementById("pass1");
let Phone = document.getElementByID("Phone");

// console.log("hi")

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?$/
    
    if(regexp.test(email.value)){
        return true;
    }
    else{
        alert("Invalid Format")
        return false;
    }    
    
    if(email.value.trim==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(pass.value.trim==""){
        alert("Password cannot be empty");
        return false;
    }
    else if(pass.value.length<8|| pass.value.length>8){
        alert("Password is too Short");
        pass.style.border="2px solid red";
        return false;
    }

    else if (pass1.value != pass.value) {
        alert("Password does not Match ");
        pass1.style.border="2px solid red";
        return false;
    }
    
    else if(Phone.value ==""){
        alert("Number needs to be filled");
        return false;
    }
    else if(isNaN(Phone.value)){
        alert("Invalid number");
        return false;
    }    
    
    else if(Phone.value.length > 10 || Phone.value.length <10){
        alert("Invalid Phone Number");
        return false;
    } 

    else{
        return true;
    }



}
