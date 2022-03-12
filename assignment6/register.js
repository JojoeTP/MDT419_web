window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var errorMessange = document.getElementById("errormsg");
    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var error = false;
    
    if(lastname.value == ""){
        errorMessange.innerHTML += "-lastname invalid ";
        error = true;
    }
    if(gender.value == ""){
        errorMessange.innerHTML += "-gender invalid ";
        error = true;
    }
    if(bday.value == ""){
        errorMessange.innerHTML += "-bday invalid ";
        error = true;
    }
    if(email.value == ""){
        errorMessange.innerHTML += "-email invalid ";
        error = true;
    }
    if(username.value == ""){
        errorMessange.innerHTML += "-username invalid ";
        error = true;
    }
    if(password[0].value != password[1].value){
        errorMessange.innerHTML += "-password incorrect";
        error = true;
    }
    if(error == true){
        return false;
    }
}

function resetForm(){
    // firstname.innerHTML = null;
    // lastname.innerHTML = null;
    // gender.innerHTML = null;
    // bday.innerHTML = null;
    // email.innerHTML = null;
    // username.innerHTML = null;
    // password.innerHTML = null;
    // retypePassword.innerHTML = null;
    errorMessange.innerHTML = "";
}