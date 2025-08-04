const loginForm = document.getElementById("loginForm");
const userArea = document.getElementById("username");
const passArea = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const loginBtn = document.getElementById("loginBtn");

function logInValidation(){

    const userArea = document.getElementById("userArea").value.trim();
    const passArea = document.getElementById("passArea").value.trim();
    

    if (userArea === "" || passArea === "") {
        errorMsg.textContent = "Please input all fields!";
        return false;
    } else {
        errorMsg.textContent = "";
        return true;
    }
}



loginForm.addEventListener("submit", function (event){
   event.preventDefault();
    if( logInValidation()) {
        errorMsg.textContent = "Logged in successfully";
        loginBtn.disabled = true;
    } else {
        errorMsg.textContent = "Invalid User and password";
    }
});

const patients = [];

const patientRegister = document.getElementById("addPatientForm");
const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const genderInputs = document.querySelectorAll(`input[name="gender"]`);
const emailAddress = document.getElementById("emailAddress");  
const address = document.getElementById("address");
const initialDiagnosis = document.getElementById("initialDiagnosis");

