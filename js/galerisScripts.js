
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


const logoimg = document.getElementById("logoimg");
let header = document.getElementById("header");



window.addEventListener("scroll", () =>{
  animaciones(5,header,"header","small")
  animaciones(5,logoimg,"logoimg","logoPequeño")

})




