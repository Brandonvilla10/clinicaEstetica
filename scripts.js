
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

const tratamiento2 = document.getElementById("tratamientos2")
tratamiento2.classList.add("aparecerFilter")

const tratamiento3 = document.getElementById("tratamientos3")
tratamiento3.classList.add("aparecerFilter")

const tratamiento4 = document.getElementById("tratamientos4")
tratamiento4.classList.add("aparecerFilter")

const tratamiento5 = document.getElementById("tratamientos5")
tratamiento5.classList.add("aparecerFilter")

const tratamiento6 = document.getElementById("tratamientos6")
tratamiento6.classList.add("aparecerFilter")



window.addEventListener("scroll", () =>{
  animaciones(5,header,"header","small")
  animaciones(5,logoimg,"logoimg","logoPequeño")
  animaciones(40,container2,"aparecerFilter","container2")
  animaciones(40,imgRightSide,"aparecerFilter","imgRightSide")
  animaciones(600,container3,"aparecerFilter","container_3")
  animaciones(1100,tratamiento1, "aparecerFilter","tratamiento1")
  animaciones(1100,tratamiento2, "aparecerFilter","tratamiento2")
  animaciones(1400,tratamiento3, "aparecerFilter","tratamiento3")
  animaciones(1400,tratamiento4, "aparecerFilter","tratamiento4")
  animaciones(1700,tratamiento5, "aparecerFilter","tratamiento5")
  animaciones(1700,tratamiento6, "aparecerFilter","tratamiento6")

})




