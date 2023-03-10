var _this = this;
var userDetails = /** @class */ (function () {
    // constructor
    function userDetails(firstName, middleName, lastName, age, gender, dob, emailId, primaryMobileNo, secondaryMobileNo, currentAddress, permanentAddress, username, password, confirmPassword) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.emailId = emailId;
        this.primaryMobileNo = primaryMobileNo;
        this.secondaryMobileNo = secondaryMobileNo;
        this.currentAddress = currentAddress;
        this.permanentAddress = permanentAddress;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return userDetails;
}());
function submitForm() {
    var gen;
    var firstName = document.getElementById("firstName");
    var middleName = document.getElementById("middleName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    var gender = document.getElementById("inlineRadio1");
    var dob = document.getElementById("dob");
    var emailId = document.getElementById("emailId");
    var primaryMobileNo = (document.getElementById("primaryMobileNo"));
    var secondaryMobileNo = (document.getElementById("secondaryMobileNo"));
    // Current Address Fields
    var streetAddress = (document.getElementById("streetAddress"));
    var streetAddressLine = (document.getElementById("streetAddressLine"));
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var pin = document.getElementById("pin");
    var country = document.getElementById("country");
    // Permanent Adress Here
    var streetAddress1 = (document.getElementById("streetAddress1"));
    var streetAddressLine1 = (document.getElementById("streetAddressLine1"));
    var city1 = document.getElementById("city1");
    var state1 = document.getElementById("state1");
    var pin1 = document.getElementById("pin1");
    var country1 = document.getElementById("country1");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmPassword = (document.getElementById("confirmPassword"));
    var male = document.getElementById("inlineRadio1");
    var female = document.getElementById("inlineRadio2");
    var other = document.getElementById("inlineRadio3");
    if (male === null || male === void 0 ? void 0 : male.checked) {
        gen = male.value;
    }
    else if (female === null || female === void 0 ? void 0 : female.checked) {
        gen = female.value;
    }
    else if (other === null || other === void 0 ? void 0 : other.checked) {
        gen = other.value;
    }
    else {
        gen = "";
    }
    if (firstName.value === "") {
        alert("Please Enter First Name");
        return false;
    }
    if (middleName.value === "") {
        alert("Please Enter Middle Name");
        return false;
    }
    if (lastName.value === "") {
        alert("Please Enter Last Name");
        return false;
    }
    if (age.value === "" ||
        parseInt(age.value) === 0 ||
        age.value === "E" ||
        parseInt(age.value) <= 0 ||
        parseInt(age.value) > 100) {
        alert("Please Enter valid age");
        return false;
    }
    if (gen === "") {
        alert("Please Select Gender");
        return false;
    }
    if (dob.value === "") {
        alert("Please Select Date Of Birth");
        return false;
    }
    if (!checkEmailId()) {
        alert("Please Enter valid email");
        return false;
    }
    if (checkMobileNumber() === 1) {
        alert("Please Enter Valid Primary Mobile Number. Mobile number must be of 10 digits");
        return false;
    }
    if (checkMobileNumber() === 2) {
        alert("Please Enter Valid Secondary Mobile Number. Mobile number must be of 10 digits");
        return false;
    }
    if (checkAddress() == 1) {
        alert("Please Enter Valid Current Address");
        return false;
    }
    if (checkAddress() == 2) {
        alert("Please Enter Valid Permanent Address");
        return false;
    }
    if (!checkUsername()) {
        alert("Please Enter Valid Username. Usernames doe not Contain Numerical Value");
        return false;
    }
    if (!checkPassword()) {
        alert("Please Enter Valid Password. Password Must Contain atleast 8 characters and @");
        return false;
    }
    if (!confirmPass()) {
        alert("Password and ConfirmPassword are not same. Please Enter same password");
        return false;
    }
    var obj = {
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        age: parseInt(age.value),
        gender: gen,
        dob: dob.value,
        emailId: emailId.value,
        primaryMobileNo: primaryMobileNo.value,
        secondaryMobileNo: secondaryMobileNo.value,
        currentAddress: {
            streetAddress: streetAddress.value,
            streetAddressLine: streetAddressLine.value,
            city: city.value,
            state: state.value,
            pin: parseInt(pin.value),
            country: country.value
        },
        permanentAddress: {
            streetAddress1: streetAddress1.value,
            streetAddressLine1: streetAddressLine1.value,
            city1: city1.value,
            state1: state1.value,
            pin1: parseInt(pin1.value),
            country1: country1.value
        },
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };
    // POST request using fetch()
    fetch("https://winter-summer-sceptre.glitch.me/submit", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        // Converting to JSON
        .then(function (response) { return response.json(); })
        // Displaying results to console
        .then(function (json) { return console.log(json); });
    console.log(obj);
    alert("Form Submitted Sucessfully");
    return true;
}
function checkEmailId() {
    var str = this.emailId.value;
    str = str.trim();
    var cnt = 0;
    if (str.includes(".")) {
        if (str.includes("@")) {
            if (!str.includes(" ")) {
                return true;
            }
        }
    }
    return false;
}
function checkMobileNumber() {
    var prMobileNo = this.primaryMobileNo.value;
    var secMobileNo = this.secondaryMobileNo.value;
    if (prMobileNo.length != 10) {
        return 1;
    }
    if (secMobileNo.length != 10) {
        return 2;
    }
    return 0;
}
function checkAddress() {
    //for current Address
    var stAddress = this.streetAddress.value;
    var sttAddressLine = this.streetAddressLine.value;
    var currentCity = this.city.value;
    var currentstate = this.state.value;
    var currentpin = this.pin.value;
    var currentcountry = this.country.value;
    //for Permanent Address
    var PstAddress = this.streetAddress1.value;
    var PsttAddressLine = this.streetAddressLine1.value;
    var PcurrentCity = this.city1.value;
    var Pcurrentstate = this.state1.value;
    var Pcurrentpin = this.pin1.value;
    var Pcurrentcountry = this.country1.value;
    if (stAddress == "" ||
        sttAddressLine == "" ||
        currentCity == "" ||
        currentstate == "0" ||
        currentpin == "" ||
        currentcountry == "0") {
        return 1;
    }
    if (PstAddress == "" ||
        PsttAddressLine == "" ||
        PcurrentCity == "" ||
        Pcurrentstate == "0" ||
        Pcurrentpin == "" ||
        Pcurrentcountry == "0") {
        return 2;
    }
    return 0;
}
var ch = document.getElementById("exampleCheck1");
ch.addEventListener("change", function (e) {
    if (e.target.checked) {
        _this.streetAddress1.value = _this.streetAddress.value;
        _this.streetAddressLine1.value = _this.streetAddressLine.value;
        _this.city1.value = _this.city.value;
        _this.state1.value = _this.state.value;
        _this.pin1.value = _this.pin.value;
        _this.country1.value = _this.country.value;
    }
    else {
        _this.streetAddress1.value = "";
        _this.streetAddressLine1.value = "";
        _this.city1.value = "";
        _this.state1.value = "0";
        _this.pin1.value = "";
        _this.country1.value = "0";
    }
});
function checkPassword() {
    var pas = this.password.value;
    pas = pas.trim();
    if (pas.length < 8 || !pas.includes("@")) {
        return false;
    }
    var cnt = 0;
    for (var i = 0; i < pas.length; i++) {
        if (pas.charAt(i) >= "0" && pas.charAt(i) <= "9") {
            cnt++;
        }
    }
    if (cnt < 3 || cnt > 5) {
        return false;
    }
    return true;
}
function confirmPass() {
    var pas = this.password.value;
    var confirmPas = this.confirmPassword.value;
    pas = pas.trim();
    confirmPas = confirmPas.trim();
    if (pas !== confirmPas) {
        return false;
    }
    return true;
}
function checkUsername() {
    var username = document.getElementById("username");
    var userName = username.value;
    if (userName === "") {
        return false;
    }
    console.log(userName);
    var cnt = 0;
    for (var i = 0; i < userName.length; i++) {
        if (userName.charAt(i) >= "0" && userName.charAt(i) <= "9") {
            return false;
        }
    }
    return true;
}
document.addEventListener("keydown", function (e) {
    if (e.key === "s" && e.ctrlKey === true) {
        e.preventDefault();
        submitForm();
    }
});
