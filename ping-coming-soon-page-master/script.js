btn = document.getElementById('btn');
mail = document.getElementById('mail');
errorM = document.getElementById('error');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let reg = /\S+@\S+\.\S+/;
    if(!reg.test(mail)){
        errorM.style.display = 'block';
        mail.classList.add('hasError');
    }
    else{
        errorM.style.display = 'none';
        mail.classList.remove('hasError');
    }
})