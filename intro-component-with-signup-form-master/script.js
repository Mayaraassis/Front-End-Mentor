const name = document.getElementById('name')
const mail = document.getElementById('mail')
const last = document.getElementById('lastname')
const password = document.getElementById('password')
const btn = document.getElementById('btn')

const error_name = document.getElementsByClassName('error_name');
const error_last = document.getElementsByClassName('error_last');
const error_mail = document.getElementsByClassName('error_mail');
const error_password = document.getElementsByClassName('error_password');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let reg = /\S+@\S+\.\S+/;
    if(name.value == ''){
        error_name[0].style.display = 'block'
        error_name[1].style.display = 'block'
    }
    if(last.value == ''){
        error_last[0].style.display = 'block'
        error_last[1].style.display = 'block'
    }
    if(!reg.test(mail.value)){
        error_mail[0].style.display = 'block'
        error_mail[1].style.display = 'block'
    }
    if(password.value == ''){
        error_password[0].style.display = 'block'
        error_password[1].style.display = 'block'
    }
})