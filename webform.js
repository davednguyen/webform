//testing out of the script is picked up by HTML page
console.log("script implemented into the page")

//submit function to get email
function signUpForm(){
    event.preventDefault();
    var firstName = document.emailForm.firstName.value;
    
    console.log("form submitted");    
}