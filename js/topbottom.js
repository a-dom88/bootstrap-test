//Start script scroll to top
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active", window.scrollY > 500)
})


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
//End script scroll to top