
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

let header = document.getElementById("header");
window.addEventListener("scroll", () =>{
  animaciones(5,header,"header","small")
})


const logoimg = document.getElementById("logoimg");
window.addEventListener("scroll", () =>{
  animaciones(30,logoimg,"logoimg","logoPequeño")
})


const container2 = document.getElementById("container2")
container2.classList.add("aparecerFilter")

window.addEventListener("scroll", ()=>{
  animaciones(40,container2,"aparecerFilter","container2")  
})

const imgRightSide = document.getElementById("imgRightSide")
imgRightSide.classList.add("aparecerFilter")

window.addEventListener("scroll", ()=>{
  animaciones(40,imgRightSide,"aparecerFilter","imgRightSide")  
})