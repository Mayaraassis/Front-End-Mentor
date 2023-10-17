const submitBtn = document.getElementById('submit_btn');
const error = document.getElementById('error');
const msg = document.getElementById('msg');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('user_mail');
    let reg = /\S+@\S+\.\S+/;
    if(reg.test(email.value)){
        error.style.display= 'none';
        msg.style.display= 'none';
    }
    else{
        error.style.display= 'block';
        msg.style.display= 'block';
        email.focus();
    }
});