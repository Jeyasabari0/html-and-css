const form = document.getElementById("form");
var nameVal = document.getElementById("name");
const password = document.getElementById("password");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    console.log("123")
})
function validateInputs(){
    const name =nameVal.value.trim();
    const password =password.value.trim();

    if(name === ''){
        setError(nameVal,'name is required')
    }
    else{
        setSuccess(name)
    }

    if(passwordVal === ''){
        setError(password,'password id required')
    }
    else if(passwordVal){
        setError(pasword,'correct password')
    }
    else{
        setSuccess(password)
    }

   
}
function setError(element,message){
    const  context = element.parentElement;
    element.innerText = message;
    ingrp.classlist.add('error')
    ingrp.classlist.remove(' success')
}
function setSuccess(element){
    const  context = element.parentElement;
    const errorElement = context.getElementById('error')  
    errorElement.innerText = '';
    ingrp.classlist.add('sucesss')
    ingrp.classlist.remove('error')
}