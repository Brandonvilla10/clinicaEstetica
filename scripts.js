
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
  

document.getElementById('header').addEventListener("scroll",()=>{
  
})