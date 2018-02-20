//testing out of the script is picked up by HTML page
console.log("script implemented into the page")

//submit function to get email
function signUpForm(){
    event.preventDefault();
    var firstName = document.custSignUpForm.fName.value;
    var lastName = document.custSignUpForm.lName.value;
    var emailAddress = document.custSignUpForm.email.value;
    var phoneNumber = document.custSignUpForm.phone.value;
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log("form submitted");    
}