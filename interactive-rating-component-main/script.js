const ratingButtons = document.querySelectorAll('li');
const submitButton = document.querySelector('.submit_btn');
const selectedRatingElement = document.getElementById('selectedRating');
const rating = document.querySelector('.rating');
const thanks = document.querySelector('.aparecer');


ratingButtons.forEach(button => {
    button.addEventListener('click', () =>{
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const selectedRating = button.textContent;
        console.log(selectedRating)
        selectedRatingElement.innerText = selectedRating;
    })
})


submitButton.addEventListener('click', () => {
    const isActive = [...ratingButtons].some(button => button.classList.contains('active'));
    if(isActive){
        rating.style.display = 'none';
        thanks.style.display = 'block';
    }
    else{
        alert('Please select a rating');
    }
})