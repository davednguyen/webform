//testing out of the script is picked up by HTML page
console.log("script implemented into the page")

//setup values for modify function
var firstName, lastName, emailAddress, phoneNumber, confirmNote;

//submit function to get email
function signUpForm() {
    event.preventDefault();

    //get values from the form
    firstName = document.custSignUpForm.fName.value;
    lastName = document.custSignUpForm.lName.value;
    emailAddress = document.custSignUpForm.email.value;
    phoneNumber = document.custSignUpForm.phone.value;
    confirmNote = "Thanks " + firstName + ", you are on our email list!";

    //log the info get from form
    console.log(confirmNote);
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log("form submitted");

    //display info on the page
    var confirmInfo = document.getElementById("confirmNote");
    confirmInfo.innerHTML = confirmNote;
    var fullName = document.getElementById("infoLine1");
    fullName.innerHTML = "Full name: " + firstName + " " + lastName;
    var customerPhone = document.getElementById("infoLine2");
    customerPhone.innerHTML = "Phone number: " + phoneNumber;
    var customerEmail = document.getElementById("infoLine3");
    customerEmail.innerHTML = "Email address: " + emailAddress;
    var modifySection = document.getElementById("modify");
    modifySection.style.display = "block";
    document.getElementById("emailForm").reset();
};

//function to remove customer from email list per his/her request
function removeInfo() {
    //display info on the page
    var confirmNote = "Your info have been removed from our email list!";
    var confirmInfo = document.getElementById("confirmNote");
    confirmInfo.innerHTML = confirmNote;
    var fullName = document.getElementById("infoLine1");
    fullName.innerHTML = "";
    var customerPhone = document.getElementById("infoLine2");
    customerPhone.innerHTML = "";
    var customerEmail = document.getElementById("infoLine3");
    customerEmail.innerHTML = "";
    var modifySection = document.getElementById("modify");
    modifySection.style.display = "none";
}

//function to modify the info already in email list
function modifyInfo() {
    //updates the current values back to the form fields
    document.custSignUpForm.fName.value = firstName;
    document.custSignUpForm.lName.value = lastName;
    document.custSignUpForm.phone.value = phoneNumber;
    document.custSignUpForm.email.value = emailAddress;
    //clear the confirm notes
    var confirmInfo = document.getElementById("confirmNote");
    confirmInfo.innerHTML = "";
    var fullName = document.getElementById("infoLine1");
    fullName.innerHTML = "";
    var customerPhone = document.getElementById("infoLine2");
    customerPhone.innerHTML = "";
    var customerEmail = document.getElementById("infoLine3");
    customerEmail.innerHTML = "";
    var modifySection = document.getElementById("modify");
    modifySection.style.display = "none";
}