let productos = [
    {
        nombre: "Chanelle",
        img: "./assets/img/chanelle.png",
        id: 1,
        precio: 7800
    },
    {
        nombre: "Gabrielle",
        img: "./assets/img/gabrielle.png",
        id: 2,
        precio: 5500
    },
    {
        nombre: "Gold",
        img: "./assets/img/gold.png",
        id: 3,
        precio: 2500
    },
    {
        nombre: "Goldewa",
        img: "./assets/img/Goldewa.png",
        id: 4,
        precio: 5000
    },
    {
        nombre: "Nisanto",
        img: "./assets/img/nisanto.png",
        id: 5,
        precio: 8500
    },
    {
        nombre: "Rosseto",
        img: "./assets/img/rosseto.png",
        id: 6,
        precio: 9000
    }
]
let elementos = document.querySelector(".elementos")
let carritoArr = JSON.parse(localStorage.getItem("carrito")) || []
let carrito = document.getElementById(`carrito`)

function cartas(){
productos.forEach((i) => {
    elementos.innerHTML += `<div> <img src="${i.img}">
                            <h2> ${i.nombre} </h2>
                            <h3> $${i.precio} </h3>
                            <button id="boton${i.id}"> Comprar </button> </div>`

})
botones()

}
cartas()

function botones(){
    productos.forEach((i) =>{
        document.getElementById(`boton${i.id}`).addEventListener(`click`, () =>{
            agregarAlCarro(i)
            console.log(carritoArr)
        })
    })
}

function agregarAlCarro(i){

    let existe = carritoArr.some((elemento) => elemento.id == i.id);
    if (existe == false){
        i.cantidad = 1
        carritoArr.push(i)
    }
    else{
        let miProd = carritoArr.find((elemento) => elemento.id == i.id);
        miProd.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carritoArr))

    mostrarCarro()
    }
function mostrarCarro(){
    carrito.innerHTML = ""
    carritoArr.forEach((i)=>{
        carrito.innerHTML += `<h2> ${i.nombre} $${i.precio} c/${i.cantidad} </h2>`
    })
}

mostrarCarro()