const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const middlenameValue = middlename.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }

    if(middlenameValue === '') {
        setError(middlename, 'middlename is required');
    } else {
        setSuccess(middlename);
    }

    if(lastnameValue === '') {
        setError(lastname, 'lastname is required');
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

function checkfirstname(){
    x=document.getElementById("firstname").value;
    const errorElem = document.getElementById("message_first");
    if(x.length<2){
        errorElem.innerHTML = "First name is too short";
        error_flag = 1;
    } else {
        if (x.match(/[a-zA-Z3-5'-]+$/)) {
            errorElem.innerHTML = ""; 
            setCookie("user",x,1); 
        }
        else  {
            errorElem.innerHTML= "Invalids characters in first name.";
          error_flag = 1;
          }
}
}

function checkmiddlename(){
    x=document.getElementById("middleinit").value;
    const errorElem = document.getElementById("message_middle");
    if(x.length>0){
         if (x.match(/[a-zA-Z ]/)) {
            errorElem.innerHTML = "";  
        }
        else  {
            errorElem.innerHTML = "Invalid characters in middle initial";
          error_flag = 1;
          }
}
}

function checklastname(){
    x=document.getElementById("lastname").value;
    const errorElem = document.getElementById("message_last");
    if(x.length<2){
        errorElem.innerHTML = "Last name is too short";
        error_flag = 1;
    } else {
        if (x.match(/[a-zA-Z3-5'-]+$/)) {
            errorElem.innerHTML = "";  
        }
        else  {
            errorElem.innerHTML = "Invalid characters in  last name.";
          error_flag = 1;
          }
}
}

function checkaddress() {
    x = document.getElementById("address").value;
    console.log(x.value);
    console.log(x.length);
    const errorElem = document.getElementById("message_address");
    if (x.length < 2 ) {  
        errorElem.innerHTML = "Enter a valid address";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
        errorElem.innerHTML = "";  
      }
      console.log(errorElem);
}

function checkcity() {
    const errorElem = document.getElementById("message_city");
    if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
        errorElem.innerHTML = "";  
       }
       else  {
        errorElem.innerHTML = "Invalid characters in City name.";
         error_flag = 1;
         }
}
function checkstate() {
   x=document.getElementById("country-state").value;
   const errorElem = document.getElementById("message_state");

   if(x=="") { 
    errorElem.innerHTML = "Please choose a state";  
         error_flag = 1;
   }
   else {
    errorElem.innerHTML = ""; 
   }
}

function checkpassword() 
    {
    const errorElem = document.getElementById("message_password");
 x = document.getElementById("password").value;
    console.log(x);
    
    if(x.search(/[a-z]/) < 0 ) { // Validate lowercase letters
        errorElem.innerHTML = "Enter At least 1 lower case letter";
      error_flag = 1;
    } else if(x.search(/[A-Z]/)< 0)  {  //validate uppercase
        errorElem.innerHTML = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else if (x.search(/[0-9]/)<0){ //validate number
        errorElem.innerHTML = "Enter at least 1 number";
        error_flag = 1; 
    } else if (x.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ){ //validate special character
        errorElem.innerHTML = "Enter At least 1 special character";
    error_flag = 1;
    } else if(passwordinput.length < 8){ //validate length
        errorElem.innerHTML = "Enter a Minimum 8 characters";
      error_flag = 1;
    }
        else{
        errorElem.innerHTML = "";
    }
}

function passwordmatch(){
    x = document.getElementById("password").value;
    y = document.getElementById("password2").value;
    const errorElem = document.getElementById("message_password2");

    if(x!==y){
        errorElem.innerHTML = "passwords dont match";
        error_flag = 1;
    } else{
        errorElem.innerHTML = "passwords match";
    }
}

function formatSSN() {
    // Get the input field and remove non-numeric characters
    let ssnInput = document.getElementById("ssn");
    let ssnValue = ssnInput.value.replace(/\D/g, '');

    // Check if the input is not empty
    if (ssnValue.length > 0) {
        // Format the SSN with dashes
        ssnValue = ssnValue.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");

        // Update the input field with the formatted value
        ssnInput.value = ssnValue;
    }
}
    
    


function checkform() 
{
  let error_flag = "0";
  checkfirstname();
  checkmiddlename();
  checklastname();
  checkaddress();
  checkcity();
  checkstate();
  checkpassword();
  passwordmatch();
  formatSSN();
  console.log("Error flag: "+error_flag);
  if (error_flag == "1")
  {
    alert("Fix the indicated errors!");
  }else {
    document.getElementById("submit").disabled = false;
  }
}

window.onscroll = function() {myFunction()};
var header = document.getElementById('header');
var sticky = header.offsetTop;
function myFunction(){
    if(window.pageYOffset>sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function setup(){
    checkCookie();
}



function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + "; path=/";


}

function getCookie(cname)
{
    var name = cname + "=";
    var cookieArray = document.cookie.split(';');
    for(var i=0; i<cookieArray.length; i++) 
      {
      var c = cookieArray[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
    return "";
}

function checkCookie() {

  var user = getCookie("user");
  var message = confirm("Welcome " + user + "\nPress OK to confirm or cancel if this isn't " + user);
  if (message == true){
        document.getElementById("firstname").setAttribute('value', user);
  }else{
    alert("Welcome New User");
    setCookie("user","",0);
  }
}



