const ddList = document.querySelectorAll('dd');
const dtList = document.querySelectorAll('dt');

dtList.forEach(function (dt, index) {
    dt.addEventListener('click', function () {
        if (dt.classList.contains('active')) {
            dt.classList.remove('active');
            ddList[index].style.display = "none"
        }
        else {
            dt.classList.add('active');
            ddList[index].style.display = "inline-block"
        }
    })

})

