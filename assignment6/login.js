window.onload = loginLoad;
var username;
var password;
var form;
function loginLoad(){
	form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	username = document.forms["myLogin"]["username"];
    password = document.forms["myLogin"]["password"];
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const usernameRegister = urlParams.get('username')
	const passwordRegister = urlParams.get('password')
	var errorText = "";
	var error = false;
	if(usernameRegister != username.value){
		errorText += "username ";
		error = true;
	}
	if(passwordRegister != password.value){
		errorText += "password ";
		error = true;
	}
	if(error == true){
		alert(errorText + "incorrect")
		return false;
	}
}

			