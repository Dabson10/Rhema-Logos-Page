// Esta primera seccion de codigo hara que funcione el boton de hamburgesa.
// Estas son es la variable para el boton

const btnBurg = document.getElementById('btnHam');
// Contenedor que se activara al presionar el boton hamburguesa'
const contSub = document.getElementById('contOpc');
const versi = document.getElementById('versiculo')
const svgHam = document.getElementById('svgHam')
const svgEx = document.getElementById('svgEx')

btnBurg.addEventListener('click', () => {
    contSub.classList.toggle('active')
    versi.classList.toggle('active')
    svgHam.classList.toggle('active')
    svgEx.classList.toggle('active')
})

// Esta funcionalidad es para abrir otro sitio web solo con un contenedor
const btnRecu = document.getElementById('btnRecu')

btnRecu.addEventListener('click', () =>{
    window.location.href = '/html/recursos.html'
})

// El siguiente bloque es para que al desplazar cierta distancia se le de un fondo a la cabecera

const contCabe = document.getElementById('cabecera');
const coloRed1 = document.getElementById('color')
const coloRed2 = document.getElementById('color2')


window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        contCabe.classList.add('con-fondo')
        coloRed1.classList.add('con-color')
        coloRed2.classList.add('con-color')
    }else{
        contCabe.classList.remove('con-fondo')
        coloRed1.classList.remove('con-color')
        coloRed2.classList.remove('con-color')
    }
})



// El siguiente es el carrusel del contenido mas reciente.

const contenedorCarrusel = document.querySelector('.carousel-container');
const slides = contenedorCarrusel.querySelectorAll('.carousel-slide');
const botonesPrevio = contenedorCarrusel.querySelector('.prev-button');
const botonesSiguiente = contenedorCarrusel.querySelector('.next-button');
const numeroDeSlides = slides.length;
let indiceActual = 0;

function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
        slide.style.display = i === indice ? 'block' : 'none';
    });
}

function siguienteSlide() {
    indiceActual++;
    if (indiceActual >= numeroDeSlides) {
        indiceActual = 0;
    }
    mostrarSlide(indiceActual);
}

function previoSlide() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = numeroDeSlides - 1;
    }
    mostrarSlide(indiceActual);
}

botonesSiguiente.addEventListener('click', siguienteSlide);
botonesPrevio.addEventListener('click', previoSlide);

// Mostrar el primer slide al cargar la página
mostrarSlide(indiceActual);



// El siguiente code es para el carrusel en mobil 


document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel');
    const slides = document.querySelectorAll('.carruselImg');
    const totalSlides = slides.length;
    const indicadoresContainer = document.createElement('div');
    indicadoresContainer.classList.add('carrusel-indicators-mob');
    carrusel.parentNode.appendChild(indicadoresContainer);

    let currentIndex = 0;

    function updateIndicators() {
        indicadoresContainer.innerHTML = ''; // Limpiar indicadores anteriores
        for (let i = 0; i < totalSlides; i++) {
            const indicador = document.createElement('button');
            indicador.classList.add('indicator-mob');
            if (i === currentIndex) {
                indicador.classList.add('active');
            }
            indicador.addEventListener('click', () => {
                currentIndex = i;
                scrollToSlide(currentIndex);
                updateIndicators();
            });
            indicadoresContainer.appendChild(indicador);
        }
    }

    function scrollToSlide(index) {
        carrusel.scrollTo({
            left: slides[index].offsetLeft,
            behavior: 'smooth'
        });
    }

    carrusel.addEventListener('scroll', () => {
        const scrollPosition = carrusel.scrollLeft;
        const slideWidth = carrusel.offsetWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateIndicators();
        }
    });

    updateIndicators(); // Inicializar los indicadores
    scrollToSlide(0); // Mostrar el primer slide al cargar
});
