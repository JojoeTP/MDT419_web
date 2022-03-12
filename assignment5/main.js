var input1;
var input2;
var input3;

window.onload = setupVar;

function setupVar(){
    input1 = document.getElementById("topic1");
    input2 = document.getElementById("comment1");
    input3 = document.getElementById("comment2");
}

function postFunction(){
    var post1 = document.getElementById("text1").value;
    if(input1.innerHTML == ""){
        input1.innerHTML = post1;
    }
    else if(input2.innerHTML == ""){
        input2.innerHTML = post1;
    }
    else if(input3.innerHTML == ""){
        input3.innerHTML = post1;
    }
    document.getElementById("text1").value = ""; // set value textbox = null
}

function clearFunction(){
    input1.innerHTML = null;
    input2.innerHTML = null;
    input3.innerHTML = null;
}