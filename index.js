let firstName = document.getElementById('firstName');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');

let gender= document.getElementsByName('gender');

let dob= document.getElementById('dob');

let emailId = document.getElementById('emailId');

let primaryMobileNo = document.getElementById('primaryMobileNo');
let secondaryMobileNo = document.getElementById('secondaryMobileNo');


//current Address Field access
let streetAddress = document.getElementById('streetAddress');
let streetAddressLine = document.getElementById('streetAddressLine');
let city = document.getElementById('city');
let state = document.getElementById('state');
let pin = document.getElementById('pin');
let country = document.getElementById('country');

//permanent Address

let streetAddress1 = document.getElementById('streetAddress1');
let streetAddressLine1 = document.getElementById('streetAddressLine1');
let city1 = document.getElementById('city1');
let state1 = document.getElementById('state1');
let pin1 = document.getElementById('pin1');
let country1 = document.getElementById('country1');


let username = document.getElementById('username');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

let saveUser = 
{
    "name" : 'Something'
}
function submitForm()
{
    if(firstName.value === "")
    {
        return alert("Please Enter First Name")
    }
    if(lastName.value === "")
    {
        return alert("Please Enter last Name")
    }

    if(middleName.value === "")
    {
        return alert("Please Enter Middle Name")
    }

    if(age.value === "" || age.value === 'e' || age.value === 'E')
    {
        return alert("Please Enter valid age");
    }

    if(gen === undefined)
    {
        return alert("Please Select Gender");
    }

    if(dob === null)
    {
        return alert("Please Select Date Of Birth");
    }

    let currentAddress = 
    {
        streetAddress : streetAddress.value,
        streetAddressLine : streetAddressLine.value,
        city : city.value,
        state : state.value,
        pin : pin.value,
        country : country.value
    };

    let permanentAddress = 
    {
        streetAddress : streetAddress1.value,
        streetAddressLine : streetAddressLine1.value,
        city : city1.value,
        state : state1.value,
        pin : pin1.value,
        country : country1.value
    }

    let gen = "";
    password
    for(let i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            gen = gender[i].value;
        }
    }
    let user = [];

    let userDetails = 
    {
        firstName : firstName.value,
        middleName : middleName.value,
        lastName : lastName.value,
        age : age.value,
        gender : gen,
        dob : dob.value,
        emailId : emailId.value,
        primaryMobileNo : primaryMobileNo.value,
        secondaryMobileNo : secondaryMobileNo.value,
        currentAddress : currentAddress,
        permanentAddress : permanentAddress,
        username : username.value,
        password : password.value,
        confirmPassword : confirmPassword.value
    }
    console.log(userDetails);
    let arr = JSON.parse(localStorage.getItem('user'));
    arr.push(userDetails);

    localStorage.setItem('user', JSON.stringify(arr));

    console.log(localStorage.getItem('user'))

}
