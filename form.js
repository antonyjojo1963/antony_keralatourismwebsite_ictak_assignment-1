let email = document.getElementById("email");
let pass = document.getElementById("pass");
let pass1 = document.getElementById("pass1");

// console.log("hi")

function validate(){
    if(email.value.trim==""){
        alert("Fields cannot be empty");
        return false;
    }
    else if(pass.value.trim==""){
        alert("Password cannot be empty");
        return false;
    }
    else if(pass.value.length<=5){
        alert("Password is too Short");
        pass.style.border="2px solid red";
        return false;
    }

    else if (pass1.value != pass.value) {
        alert("Password does not Match ");
        pass1.style.border="2px solid red";
        return false;
    }


    else{
        return true;
    }



}
