//testing out of the script is picked up by HTML page
console.log("script implemented into the page")

//submit function to get email
function signUpForm(){
    event.preventDefault();

    //get values from the form
    var firstName = document.custSignUpForm.fName.value;
    var lastName = document.custSignUpForm.lName.value;
    var emailAddress = document.custSignUpForm.email.value;
    var phoneNumber = document.custSignUpForm.phone.value;

    //log the info get from form
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log("form submitted");

    //display info on the page
    var confirmInfo = document.getElementById("confirmNote");
    confirmInfo.innerHTML = "Thanks "+ firstName + " ,you are on our email list!         ";
    var fullName = document.getElementById("infoLine1");
    fullName.innerHTML = "Full name: " + firstName + " " + lastName;
    var customerPhone = document.getElementById("infoLine2");
    customerPhone.innerHTML = "Phone number: " + phoneNumber;
    var customerEmail = document.getElementById("infoLine3");
    customerEmail.innerHTML = "Email address: " + emailAddress;
}