// Esta primera seccion de codigo hara que funcione el boton de hamburgesa.
// Estas son es la variable para el boton

const btnBurg = document.getElementById('btnHam');
// Contenedor que se activara al presionar el boton hamburguesa'
const contSub = document.getElementById('contOpc');

btnBurg.addEventListener('click', () => {
    contSub.classList.toggle('active')
})

// Esta funcionalidad es para abrir otro sitio web solo con un contenedor
const btnRecu = document.getElementById('btnRecu')

btnRecu.addEventListener('click', () =>{
    window.location.href = '/html/recursos.html'
})