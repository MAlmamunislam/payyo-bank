document.getElementById('login-btn').addEventListener('click',function(event){
// get number
let number = document.getElementById('input-Number');
let mobileNumber = number.value;

// get pin
let pass = document.getElementById('input-pin');
let password = pass.value;


// pin and number match 
if(mobileNumber == '01994810914' && password == '1234' ){
     alert('login successes')
     window.location.assign('/home.html')
}
else{
     alert('login Failed ');
     return;
}

})