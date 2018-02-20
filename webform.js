//testing out of the script is picked up by HTML page
console.log("script implemented into the page")

//submit function to get email
function signUpForm() {
    event.preventDefault();

    //get values from the form
    var firstName = document.custSignUpForm.fName.value;
    var lastName = document.custSignUpForm.lName.value;
    var emailAddress = document.custSignUpForm.email.value;
    var phoneNumber = document.custSignUpForm.phone.value;
    var confirmNote = "Thanks " + firstName + " ,you are on our email list!";

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
    var confirmNote = "Hello ,your info removed from our email list!";
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