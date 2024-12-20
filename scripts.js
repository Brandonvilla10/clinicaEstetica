
// const mostrarMenu = document.getElementById("mostrarMenu")
// const menuLateral = document.getElementById("menuLateral")

// menuLateral.style.visibility = 'hidden'

// function mostrar(){
//     menuLateral.style.visibility = 'visible' 
// }

// function ocultar(){
//     menuLateral.style.visibility = 'hidden'
// }

// mostrarMenu.addEventListener("click", (e) =>{
//     e.preventDefault()

//     if(menuLateral.style.visibility === 'hidden'){
//         mostrar()
//     }else if(menuLateral.style.visibility === 'visible'){
//        ocultar()
//     }
// })

document.getElementById("mostrarMenu").addEventListener("click", function(e) {
    e.preventDefault();
    const menu = document.getElementById("menuLateral");
    menu.classList.toggle("visible");
  });
  



function animaciones(pixeles,propiedad,clase1,clase2){
  if (window.scrollY > pixeles ){
    propiedad.classList.replace(clase1,clase2)
  }else{
    propiedad.classList.replace(clase2,clase1)
  }
}



const container3 = document.getElementById("container3")
const logoimg = document.getElementById("logoimg");


const container2 = document.getElementById("container2")
container2.classList.add("aparecerFilter")

const imgRightSide = document.getElementById("imgRightSide")
imgRightSide.classList.add("aparecerFilter")

let header = document.getElementById("header");

const tratamiento1 = document.getElementById("tratamientos1")
tratamiento1.classList.add("aparecerFilter")
const tratamiento2 = document.getElementsByClassName("tratamiento2")
const tratamiento3 = document.getElementsByClassName("tratamiento3")
const tratamiento4 = document.getElementsByClassName("tratamiento4")
const tratamiento5 = document.getElementsByClassName("tratamiento5")
const tratamiento6 = document.getElementsByClassName("tratamiento6")
const tratamiento7 = document.getElementsByClassName("tratamiento7")
const tratamiento8 = document.getElementsByClassName("tratamiento8")



window.addEventListener("scroll", () =>{
  animaciones(5,header,"header","small")
  animaciones(5,logoimg,"logoimg","logoPequeño")
  animaciones(40,container2,"aparecerFilter","container2")
  animaciones(40,imgRightSide,"aparecerFilter","imgRightSide")
  animaciones(600,container3,"aparecerFilter","container_3")
  animaciones(1100,tratamiento1, "aparecerFilter","tratamiento1")
})




