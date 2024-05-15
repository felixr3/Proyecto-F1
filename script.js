const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 80)
})





// Desplazamiento suave hacia arriba
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}