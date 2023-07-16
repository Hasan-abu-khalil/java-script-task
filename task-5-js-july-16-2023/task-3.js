
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const date = document.getElementById('date')
const email= document.getElementById('email')
const conformemail= document.getElementById('conformemail')
const password= document.getElementById('password')
const conformpassword= document.getElementById('conformpassword')



const message = document.getElementById('message')
const message2 = document.getElementById('message2')
const message3 = document.getElementById('message3')
const message4 = document.getElementById('message4')
const message5 = document.getElementById('message5')
const message6 = document.getElementById('message6')
const message7 = document.getElementById('message7')






fname.addEventListener("input", function () {

    const rgfname = /^[a-zA-Z]+$/;
    
    if(rgfname.test(fname.value)){
        message.innerHTML = ''
    }else{
        message.innerHTML = "number are not allow"

    }

});




lname.addEventListener("input", function () {

    const rglname = /^[a-zA-Z]+$/;
    
    if(rglname.test(lname.value)){
        message2.innerHTML = ''
    }else{
        message2.innerHTML = "number are not allow"
    }

});



date.addEventListener("input", function () {

    const rgdate = /^\d{4}-\d{2}-\d{2}$/;

    if(rgdate.test(date.value)){
        message3.innerHTML = ''
    }else{
        message3.innerHTML = "the format should be dd/mm/yy"
        
    }

});






