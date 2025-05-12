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
const contVer = document.getElementById('contVer')


window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        contCabe.classList.add('con-fondo')
        coloRed1.classList.add('con-color')
        coloRed2.classList.add('con-color')
        contVer.classList.add('apa')
    }else{
        contCabe.classList.remove('con-fondo')
        coloRed1.classList.remove('con-color')
        coloRed2.classList.remove('con-color')
        contVer.classList.remove('apa')
    }
})

// Las siguientes funciones son para agregar diseño y que se muestre cada seccion
//correspondiente a su boton,
// por lo que las siguientes variables son entre botones y contenedores de cada seccion

const btnGen = document.getElementById('btnGen')
const btnMya = document.getElementById('btnMay')
const btnMen = document.getElementById('btnMen')
// Para especificar en que seccion esta tambien agregaremos diseño con .active
const contCircle = document.getElementById('opc1')
const contMenor = document.getElementById('contMenor')

// Las siguientes variables son para cambiar informacion con forme se active
const titulo = document.getElementById('tituloSec')
const descrip = document.getElementById('descSec')

function apaGeneral(){
    opc1.classList.toggle('active')
}

function menores(){
contMenor.classList.toggle('active')
    if (contMenor.classList.contains('active')){
        titulo.innerHTML = `Profetas Menores`
        descrip.innerHTML = `Descripcion de la seccion`
    }else{
        titulo.innerHTML =`Busqueda`
        descrip.innerHTML = `Si deseas algun PDF selecciona la categoria a la que pertenece para que lo 
                    pueda descargar`
    }
    
    // Si se activa la seccion, lo unico que falta que si otra esta abierta, se debe de 
    // cerrar .
    
}





// La siguiente funcion es para mostrar la seccion de los PDFs que aun no hay
function noDisponible(){
    alert('Este libro aun no esta terminado. Ten paciencia ')
}

