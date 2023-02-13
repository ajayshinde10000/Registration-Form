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


function submitForm()
{
    let gen = undefined;
    for(let i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            gen = gender[i].value;
        }
    }

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

    if(dob.value === "")
    {
        return alert("Please Select Date Of Birth");
    }

    if(!checkEmailId())
    {
        return alert("Please Enter valid email")
    }

    if(checkMobileNumber() === 1)
    {
        return alert("Please Enter Valid Primary Mobile Number")
    }

    if(checkMobileNumber() === 2)
    {
        return alert("Please Enter Valid Secondary Mobile Number")
    }

    if(checkAddress() == 1)
    {
       return alert("Please Enter Valid Current Address")
    }

    if(checkAddress() == 2)
    {
       return alert("Please Enter Valid Permanent Address");
    }

    if(!checkUsername())
    {
        return alert("Please Enter Valid Username. Usernames doe not Contain Numerical Value")
    }

    if(!checkPassword())
    {
        return alert("Please Enter Valid Password. Password Must Contain atleast 8 characters and @");
    }

    if(!confirmPass())
    {
        return alert("Password and ConfirmPassword are not same. Please Enter same password");
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
    if(arr === null)
    {
        arr = [];
        localStorage.setItem('user', JSON.stringify(arr));
        arr = JSON.parse(localStorage.getItem('user'));
    }

    arr.push(userDetails);
    console.log(arr);
    localStorage.setItem('user', JSON.stringify(arr));

    console.log(localStorage.getItem('user'));
    window.location.reload();
   
}
let arr = JSON.parse(localStorage.getItem('user'))
console.log(arr[arr.length - 1]);

function checkEmailId()
{
    let str = emailId.value;
    str = str.trim();
    let cnt=0;
    
    if(str.includes("."))
    {
        if(str.includes("@"))
        {
            if(!str.includes(" "))
            {
                return true;
            }
        }
    }
    return false;
}

function checkMobileNumber()
{
    let prMobileNo = primaryMobileNo.value;
    let secMobileNo = secondaryMobileNo.value;

    if(prMobileNo.length != 10)
    {
        return 1;
    }
    if(secMobileNo.length != 10)
    {
        return 2;
    }

    return 0;
}

function checkAddress()
{
    //for current Address
    let stAddress = streetAddress.value;
    let sttAddressLine = streetAddressLine.value;
    let currentCity = city.value;
    let currentstate = state.value;
    let currentpin = pin.value;
    let currentcountry = country.value;


    //for Permanent Address

    let PstAddress = streetAddress1.value;
    let PsttAddressLine = streetAddressLine1.value;
    let PcurrentCity = city1.value;
    let Pcurrentstate = state1.value;
    let Pcurrentpin = pin1.value;
    let Pcurrentcountry = country1.value;

    if(stAddress == "" || sttAddressLine == "" || currentCity == "" || currentstate == "0" || currentpin == "" || currentcountry=="0")
    {
        return 1;
    }

    if(PstAddress == "" || PsttAddressLine == "" || PcurrentCity == "" || Pcurrentstate == "0" || Pcurrentpin == "" || Pcurrentcountry=="0")
    {
        return 2;
    }
    return 0;
}

let ch = document.getElementById('exampleCheck1');

ch.addEventListener('change', e => {

    if(e.target.checked){
        streetAddress1.value = streetAddress.value;
        streetAddressLine1.value = streetAddressLine.value;
        city1.value = city.value;
        state1.value = state.value;
        pin1.value = pin.value;
        country1.value = country.value;
    }
    else
    {
        streetAddress1.value = "";
        streetAddressLine1.value = "";
        city1.value = "";
        state1.value = "";
        pin1.value = "";
        country1.value = "";
    }
});

function checkPassword()
{
    let pas = password.value;
    pas = pas.trim();
    if(pas.length<8 || !pas.includes("@"))
    {
        return false;
    }

    let cnt=0;
    for(let i=0; i<pas.length; i++)
    {
        if(pas.charAt(i)>='0' && pas.charAt(i)<='9')
        {
            cnt++;
        }
    }
    if(cnt<3 || cnt>5)
    {
        return false;
    }
    return true;
}

function confirmPass()
{
    let pas = password.value;
    let confirmPas = confirmPassword.value;

    pas = pas.trim();
    confirmPas = confirmPas.trim();

    if(pas !== confirmPas)
    {
        return false;
    }

    return true;
}

function checkUsername()
{
    let userName = username.value;
    let cnt=0;

    for(let i=0; i<userName.length; i++)
    {
        if(userName.charAt(i)>='0' && userName.charAt(i)<='9')
        {
            return false;
        }
    }
    return true;
}

