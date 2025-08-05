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


      const birthDay = document.getElementById("birthDay");
      const birthYear = document.getElementById("birthYear");
      const birthMonth = document.getElementById("birthMonth");

function initBirthdayDropDowns () {
    
        const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];

        for (let i = 0; i < monthNames.length; i++) {
        const option = document.createElement("option");
        option.value = i + 1;
        option.textContent = monthNames[i];
        birthMonth.appendChild(option);
        }
 
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1900; y--) {
        const option = document.createElement("option");
        option.value = y;
        option.textContent = y;
        birthYear.appendChild(option);
    }
    }
    


function updateBirthdayOption() {

      const birthYearValue = parseInt(birthYear.value, 10);
      const birthMonthValue = parseInt(birthMonth.value, 10);


    if (isNaN(birthMonthValue) || isNaN(birthYearValue)) {
        registerErrorMsg.textContent="Please fill out all required fields.";
        birthDay.disabled = true;
        return;
    } else {
        registerErrorMsg.textContent = "";
        birthDay.disabled = false;  
    }

    const daysInMonth = new Date(birthYearValue, birthMonthValue, 0).getDate();
        
    birthDay.innerHTML = "<option value=''>Day</option>";
    for (let d = 1; d <= daysInMonth; d++) {
        const option = document.createElement("option");
        option.value = d;
        option.textContent = d;
        birthDay.appendChild(option);     
    }

}

initBirthdayDropDowns();
updateBirthdayOption();
birthMonth.addEventListener("change", updateBirthdayOption);
birthYear.addEventListener("change", updateBirthdayOption);


const patients = [];

const patient = {
  fullName: "...",
  age: "...",
  gender: "...",
  contact: "...",
  address: "...",
  notes: "..."
};

const patientRegister = document.getElementById("addPatientForm");
const firstName = document.getElementById("firstName");
const middleInitial = document.getElementById("middleInitial");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const genderInputs = document.querySelectorAll(`input[name="gender"]`);
const emailAddress = document.getElementById("emailAddress");  
const address = document.getElementById("address");
const initialDiagnosis = document.getElementById("initialDiagnosis");
const registerErrorMsg = document.getElementById("registerErrorMsg");""

    function validateRadio() {
        return document.querySelector(`input[name="gender"]:checked`) !== null;
    }

patientRegister.addEventListener("submit", function (e) {

    let errors = [];

    if (firstName.value.trim() === "") errors.push ("First name");
    if (middleInitial.value.trim() === "") errors.push ("Middle initial");
    if (lastName.value.trim() === "") errors.push ("Last Name");

    const ageInput = document.getElementById("age").value;
    const age = parseInt(ageInput, 10);
    if (isNaN(age)) {
        errors.push('Age');
    }

    if (!validateRadio()) {
        errors.push("gender")
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    const emailVal = emailAddress.value.trim();

    if (emailVal === "" || !emailPattern.test(emailAddress.value.trim())){
        errors.push("Email");
    }

    let initDiagnosis = "";
     initDiagnosis = initialDiagnosis.value.trim();


    if (errors.length > 0) {
        registerErrorMsg.textContent = `${errors.join(", ")} ${errors.length > 1 ? "are" : "is" } required.`;
        }

    
});