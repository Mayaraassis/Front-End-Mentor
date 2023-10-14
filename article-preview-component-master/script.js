button = document.querySelector('.btn');
share = document.querySelector('.share_container');
console.log(button)

button.addEventListener('click', () =>{
    button.classList.toggle('active');
    if(button.classList.contains('active')){
        share.style.display = "block"
    }
    else{
        share.style.display = "none"
    }
})