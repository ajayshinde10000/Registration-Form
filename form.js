var firstName = document.getElementById('firstName');
var middleName = document.getElementById('middleName');
var lastName = document.getElementById('lastName');
var age = document.getElementById('age');
var gender = document.getElementsByName('gender');
var dob = document.getElementById('dob');
var emailId = document.getElementById('emailId');
var primaryMobileNo = document.getElementById('primaryMobileNo');
var secondaryMobileNo = document.getElementById('secondaryMobileNo');
//current Address Field access
var streetAddress = document.getElementById('streetAddress');
var streetAddressLine = document.getElementById('streetAddressLine');
var city = document.getElementById('city');
var state = document.getElementById('state');
var pin = document.getElementById('pin');
var country = document.getElementById('country');
//permanent Address
var streetAddress1 = document.getElementById('streetAddress1');
var streetAddressLine1 = document.getElementById('streetAddressLine1');
var city1 = document.getElementById('city1');
var state1 = document.getElementById('state1');
var pin1 = document.getElementById('pin1');
var country1 = document.getElementById('country1');
var username = document.getElementById('username');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
function submitForm() {
    var gen = undefined;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen = gender[i].value;
        }
    }
    fName = firstName.value;
    fName = fName.trim();
    if (fName === "") {
        return alert("Please Enter First Name");
    }
    mName = middleName.value;
    mName = mName.trim();
    if (mName === "") {
        return alert("Please Enter Middle Name");
    }
    lName = lastName.value;
    lName = lName.trim();
    if (lName === "") {
        return alert("Please Enter last Name");
    }
    if (age.value === "" || age.value === 'e' || age.value === 'E' || age.value <= 0 || age.value > 100) {
        return alert("Please Enter valid age");
    }
    if (gen === undefined) {
        return alert("Please Select Gender");
    }
    if (dob.value === "") {
        return alert("Please Select Date Of Birth");
    }
    if (!checkEmailId()) {
        return alert("Please Enter valid email");
    }
    if (checkMobileNumber() === 1) {
        return alert("Please Enter Valid Primary Mobile Number. Mobile number must be of 10 digits");
    }
    if (checkMobileNumber() === 2) {
        return alert("Please Enter Valid Secondary Mobile Number. Mobile number must be of 10 digits");
    }
    if (checkAddress() == 1) {
        return alert("Please Enter Valid Current Address");
    }
    if (checkAddress() == 2) {
        return alert("Please Enter Valid Permanent Address");
    }
    if (!checkUsername()) {
        return alert("Please Enter Valid Username. Usernames doe not Contain Numerical Value");
    }
    if (!checkPassword()) {
        return alert("Please Enter Valid Password. Password Must Contain atleast 8 characters and @");
    }
    if (!confirmPass()) {
        return alert("Password and ConfirmPassword are not same. Please Enter same password");
    }
    var currentAddress = {
        streetAddress: streetAddress.value,
        streetAddressLine: streetAddressLine.value,
        city: city.value,
        state: state.value,
        pin: pin.value,
        country: country.value
    };
    var permanentAddress = {
        streetAddress: streetAddress1.value,
        streetAddressLine: streetAddressLine1.value,
        city: city1.value,
        state: state1.value,
        pin: pin1.value,
        country: country1.value
    };
    var user = [];
    var userDetails = {
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        age: age.value,
        gender: gen,
        dob: dob.value,
        emailId: emailId.value,
        primaryMobileNo: primaryMobileNo.value,
        secondaryMobileNo: secondaryMobileNo.value,
        currentAddress: currentAddress,
        permanentAddress: permanentAddress,
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };
    // main.js
    // POST request using fetch()
    fetch("https://winter-summer-sceptre.glitch.me/submit", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        // Converting to JSON
        .then(function (response) { return response.json(userDetails); })
        // Displaying results to console
        .then(function (json) { return console.log(json); });
    console.log(userDetails);
    var arr = JSON.parse(localStorage.getItem('user'));
    arr.push(userDetails);
    console.log(arr);
    localStorage.setItem('user', JSON.stringify(arr));
}
function InitialLoad() {
    var arr = JSON.parse(localStorage.getItem('user'));
    if (arr === null) {
        arr = [];
        localStorage.setItem('user', JSON.stringify(arr));
        arr = JSON.parse(localStorage.getItem('user'));
    }
    console.log(arr[arr.length - 1]);
}
InitialLoad();
function checkEmailId() {
    var str = emailId.value;
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
    var prMobileNo = primaryMobileNo.value;
    var secMobileNo = secondaryMobileNo.value;
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
    var stAddress = streetAddress.value;
    var sttAddressLine = streetAddressLine.value;
    var currentCity = city.value;
    var currentstate = state.value;
    var currentpin = pin.value;
    var currentcountry = country.value;
    //for Permanent Address
    var PstAddress = streetAddress1.value;
    var PsttAddressLine = streetAddressLine1.value;
    var PcurrentCity = city1.value;
    var Pcurrentstate = state1.value;
    var Pcurrentpin = pin1.value;
    var Pcurrentcountry = country1.value;
    if (stAddress == "" || sttAddressLine == "" || currentCity == "" || currentstate == "0" || currentpin == "" || currentcountry == "0") {
        return 1;
    }
    if (PstAddress == "" || PsttAddressLine == "" || PcurrentCity == "" || Pcurrentstate == "0" || Pcurrentpin == "" || Pcurrentcountry == "0") {
        return 2;
    }
    return 0;
}
var ch = document.getElementById('exampleCheck1');
ch.addEventListener('change', function (e) {
    if (e.target.checked) {
        streetAddress1.value = streetAddress.value;
        streetAddressLine1.value = streetAddressLine.value;
        city1.value = city.value;
        state1.value = state.value;
        pin1.value = pin.value;
        country1.value = country.value;
    }
    else {
        streetAddress1.value = "";
        streetAddressLine1.value = "";
        city1.value = "";
        state1.value = "0";
        pin1.value = "";
        country1.value = "0";
    }
});
function checkPassword() {
    var pas = password.value;
    pas = pas.trim();
    if (pas.length < 8 || !pas.includes("@")) {
        return false;
    }
    var cnt = 0;
    for (var i = 0; i < pas.length; i++) {
        if (pas.charAt(i) >= '0' && pas.charAt(i) <= '9') {
            cnt++;
        }
    }
    if (cnt < 3 || cnt > 5) {
        return false;
    }
    return true;
}
function confirmPass() {
    var pas = password.value;
    var confirmPas = confirmPassword.value;
    pas = pas.trim();
    confirmPas = confirmPas.trim();
    if (pas !== confirmPas) {
        return false;
    }
    return true;
}
function checkUsername() {
    var userName = username.value;
    var cnt = 0;
    for (var i = 0; i < userName.length; i++) {
        if (userName.charAt(i) >= '0' && userName.charAt(i) <= '9') {
            return false;
        }
    }
    return true;
}
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        submitForm();
    }
});
