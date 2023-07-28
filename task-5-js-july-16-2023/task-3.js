
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const date = document.getElementById('date')
const email = document.getElementById('email')
const conformemail = document.getElementById('conformemail')
const password = document.getElementById('password')
const conformpassword = document.getElementById('conformpassword')



const message = document.getElementById('message')
const message2 = document.getElementById('message2')
const message3 = document.getElementById('message3')
const message4 = document.getElementById('message4')
const message5 = document.getElementById('message5')
const message6 = document.getElementById('message6')
const message7 = document.getElementById('message7')



const rglname = /^[a-zA-Z]+$/;
const rgfname = /^[a-zA-Z]+$/;
const rgdate = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/;
const rgemail = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}/;
const rgpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


fname.addEventListener("input", function () {



    if (rgfname.test(fname.value)) {
        message.innerHTML = ''
    } else {
        message.innerHTML = "number are not allow"

    }

});




lname.addEventListener("input", function () {

    if (rglname.test(lname.value)) {
        message2.innerHTML = ''
    } else {
        message2.innerHTML = "number are not allow"
    }

});



date.addEventListener("input", function () {


    if (rgdate.test(date.value)) {
        message3.innerHTML = ''
    } else {
        message3.innerHTML = "the format should be dd/mm/yyyy"

    }

});


email.addEventListener("input", function () {


    if (rgemail.test(email.value)) {
        message4.innerHTML = ''
    } else {
        message4.innerHTML = 'the email is not vaild'

    }

});




conformemail.addEventListener("input", function () {

    if (conformemail.value == email.value) {
        message5.innerHTML = ''

    } else {
        message5.innerHTML = 'the email is not vaild'

    }

});





password.addEventListener("input", function () {


    if (rgpassword.test(password.value)) {
        message6.innerHTML = ''

    } else {
        message6.innerHTML = 'the password is not matching 222'

    }

});




conformpassword.addEventListener("input", function () {

    if (conformpassword.value == password.value) {
        message7.innerHTML = ''
    } else {
        message7.innerHTML = 'the password is not matching'

    }

});