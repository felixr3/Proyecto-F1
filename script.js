const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window.scrollY > 80)
})

// Desplazamiento suave hacia arriba
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Menu
let menu = document.querySelector('#menu-icono');
let navegacion = document.querySelector('.navegacion');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegacion.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navegacion.classList.remove('open')
}

//Validacion

document.getElementById("formulario").addEventListener("submit", function(event) {
    
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const mayorEdad = document.getElementById("mayorEdad").checked;

    if (nombre === "" || apellido === "" || email === "" || motivo === "" ||!mayorEdad) {
      alert("Por favor, complete todos los campos y confirme que tiene 18 años o más.");
      return false;
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    alert("Gracias por enviar el formulario!");
    this.submit();
  
  });