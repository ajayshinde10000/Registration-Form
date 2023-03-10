interface Users {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  dob: string;
  emailId: string;
  primaryMobileNo: string;
  secondaryMobileNo: string;

  currentAddress: {
    streetAddress: string;
    streetAddressLine: string;
    city: string;
    state: string;
    pin: number;
    country: string;
  };

  permanentAddress: {
    streetAddress1: string;
    streetAddressLine1: string;
    city1: string;
    state1: string;
    pin1: number;
    country1: string;
  };

  username: string;
  password: string;
  confirmPassword: string;
}

class userDetails implements Users {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  dob: string;
  emailId: string;
  primaryMobileNo: string;
  secondaryMobileNo: string;

  currentAddress: {
    streetAddress: string;
    streetAddressLine: string;
    city: string;
    state: string;
    pin: number;
    country: string;
  };

  permanentAddress: {
    streetAddress1: string;
    streetAddressLine1: string;
    city1: string;
    state1: string;
    pin1: number;
    country1: string;
  };

  username: string;
  password: string;
  confirmPassword: string;

  // constructor
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number,
    gender: string,
    dob: string,
    emailId: string,
    primaryMobileNo: string,
    secondaryMobileNo: string,
    currentAddress: {
      streetAddress: string;
      streetAddressLine: string;
      city: string;
      state: string;
      pin: number;
      country: string;
    },
    permanentAddress: {
      streetAddress1: string;
      streetAddressLine1: string;
      city1: string;
      state1: string;
      pin1: number;
      country1: string;
    },
    username: string,
    password: string,
    confirmPassword: string
  ) {
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
}

function submitForm(): boolean {
  let gen: string;

  let firstName = <HTMLInputElement>document.getElementById("firstName");
  let middleName = <HTMLInputElement>document.getElementById("middleName");
  let lastName = <HTMLInputElement>document.getElementById("lastName");

  let age = <HTMLInputElement>document.getElementById("age");
  let gender = document.getElementById(
    "inlineRadio1"
  ) as HTMLInputElement | null;
  let dob = <HTMLInputElement>document.getElementById("dob");
  let emailId = <HTMLInputElement>document.getElementById("emailId");
  let primaryMobileNo = <HTMLInputElement>(
    document.getElementById("primaryMobileNo")
  );
  let secondaryMobileNo = <HTMLInputElement>(
    document.getElementById("secondaryMobileNo")
  );

  // Current Address Fields
  let streetAddress = <HTMLInputElement>(
    document.getElementById("streetAddress")
  );
  let streetAddressLine = <HTMLInputElement>(
    document.getElementById("streetAddressLine")
  );
  let city = <HTMLInputElement>document.getElementById("city");
  let state = <HTMLInputElement>document.getElementById("state");
  let pin = <HTMLInputElement>document.getElementById("pin");
  let country = <HTMLInputElement>document.getElementById("country");

  // Permanent Adress Here
  let streetAddress1 = <HTMLInputElement>(
    document.getElementById("streetAddress1")
  );
  let streetAddressLine1 = <HTMLInputElement>(
    document.getElementById("streetAddressLine1")
  );
  let city1 = <HTMLInputElement>document.getElementById("city1");
  let state1 = <HTMLInputElement>document.getElementById("state1");
  let pin1 = <HTMLInputElement>document.getElementById("pin1");
  let country1 = <HTMLInputElement>document.getElementById("country1");

  let username = <HTMLInputElement>document.getElementById("username");
  let password = <HTMLInputElement>document.getElementById("password");
  let confirmPassword = <HTMLInputElement>(
    document.getElementById("confirmPassword")
  );

  let male = <HTMLInputElement>document.getElementById("inlineRadio1");
  let female = <HTMLInputElement>document.getElementById("inlineRadio2");
  let other = <HTMLInputElement>document.getElementById("inlineRadio3");

  if (male?.checked) {
    gen = male.value;
  } else if (female?.checked) {
    gen = female.value;
  } else if (other?.checked) {
    gen = other.value;
  } else {
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
  if (
    age.value === "" ||
    parseInt(age.value) === 0 ||
    age.value === "E" ||
    parseInt(age.value) <= 0 ||
    parseInt(age.value) > 100
  ) {
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
    alert(
      "Please Enter Valid Primary Mobile Number. Mobile number must be of 10 digits"
    );
    return false;
  }

  if (checkMobileNumber() === 2) {
    alert(
      "Please Enter Valid Secondary Mobile Number. Mobile number must be of 10 digits"
    );
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
    alert(
      "Please Enter Valid Username. Usernames doe not Contain Numerical Value"
    );
    return false;
  }

  if (!checkPassword()) {
    alert(
      "Please Enter Valid Password. Password Must Contain atleast 8 characters and @"
    );
    return false;
  }

  if (!confirmPass()) {
    alert(
      "Password and ConfirmPassword are not same. Please Enter same password"
    );
    return false;
  }

  let obj: Users = {
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
      country: country.value,
    },
    permanentAddress: {
      streetAddress1: streetAddress1.value,
      streetAddressLine1: streetAddressLine1.value,
      city1: city1.value,
      state1: state1.value,
      pin1: parseInt(pin1.value),
      country1: country1.value,
    },
    username: username.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  // POST request using fetch()
  fetch("https://winter-summer-sceptre.glitch.me/submit", {
    method: "POST",
    body: JSON.stringify(obj),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())
    // Displaying results to console
    .then((json) => console.log(json));

  console.log(obj);
  alert("Form Submitted Sucessfully");
  return true;
}

function checkEmailId() {
  let str = this.emailId.value;
  str = str.trim();
  let cnt = 0;

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
  let prMobileNo = this.primaryMobileNo.value;
  let secMobileNo = this.secondaryMobileNo.value;

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
  let stAddress = this.streetAddress.value;
  let sttAddressLine = this.streetAddressLine.value;
  let currentCity = this.city.value;
  let currentstate = this.state.value;
  let currentpin = this.pin.value;
  let currentcountry = this.country.value;

  //for Permanent Address
  let PstAddress = this.streetAddress1.value;
  let PsttAddressLine = this.streetAddressLine1.value;
  let PcurrentCity = this.city1.value;
  let Pcurrentstate = this.state1.value;
  let Pcurrentpin = this.pin1.value;
  let Pcurrentcountry = this.country1.value;

  if (
    stAddress == "" ||
    sttAddressLine == "" ||
    currentCity == "" ||
    currentstate == "0" ||
    currentpin == "" ||
    currentcountry == "0"
  ) {
    return 1;
  }

  if (
    PstAddress == "" ||
    PsttAddressLine == "" ||
    PcurrentCity == "" ||
    Pcurrentstate == "0" ||
    Pcurrentpin == "" ||
    Pcurrentcountry == "0"
  ) {
    return 2;
  }
  return 0;
}

let ch = <HTMLInputElement>document.getElementById("exampleCheck1");

ch.addEventListener("change", (e) => {
  if ((<HTMLInputElement>e.target).checked) {
    this.streetAddress1.value = this.streetAddress.value;
    this.streetAddressLine1.value = this.streetAddressLine.value;
    this.city1.value = this.city.value;
    this.state1.value = this.state.value;
    this.pin1.value = this.pin.value;
    this.country1.value = this.country.value;
  } else {
    this.streetAddress1.value = "";
    this.streetAddressLine1.value = "";
    this.city1.value = "";
    this.state1.value = "0";
    this.pin1.value = "";
    this.country1.value = "0";
  }
});

function checkPassword() {
  let pas = this.password.value;
  pas = pas.trim();
  if (pas.length < 8 || !pas.includes("@")) {
    return false;
  }
  let cnt = 0;
  for (let i = 0; i < pas.length; i++) {
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
  let pas = this.password.value;
  let confirmPas = this.confirmPassword.value;
  pas = pas.trim();
  confirmPas = confirmPas.trim();
  if (pas !== confirmPas) {
    return false;
  }
  return true;
}

function checkUsername() {
  let username = <HTMLInputElement>document.getElementById("username");

  let userName = username.value;
  if (userName === "") {
    return false;
  }
  console.log(userName);
  let cnt = 0;
  for (let i = 0; i < userName.length; i++) {
    if (userName.charAt(i) >= "0" && userName.charAt(i) <= "9") {
      return false;
    }
  }
  return true;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "s" && e.ctrlKey === true) {
    e.preventDefault();
    submitForm();
  }
});
