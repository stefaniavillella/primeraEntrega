// SALUDO DREAMER

function saludar (){
    let saludo = prompt('Ingresa tu nombre');
    alert ("Hola " + saludo + "! Vamos a por tu kit ideal");
}
saludar ();


// DEFINO ARRAYS Y OBJETOS

const carrito = [];
const productos = [
    {id:1, categoria:'Niñas', nombre: 'Nube Romántica', precio: 500, foto: './img/productoNubes.jpg'},
    {id:2, categoria:'Niños', nombre: 'Trencito', precio: 400, foto: './img/productoTren.jpg'},
    {id:3, categoria:'Niñas', nombre: 'Cola de Sirena', precio: 550, foto: './img/productoSirenita.jpg'},
    {id:4, categoria:'Niños', nombre: 'Animales de la selva', precio: 500, foto: './img/productoSelva.jpg'},
    {id:5, categoria:'Comunion', nombre: 'Estilo Rústico', precio: 600, foto: './img/productoRustica.jpg'},
    {id:6, categoria:'Niñas', nombre: 'Muñecas LOL', precio: 500, foto: './img/productoLol.jpg'},
    {id:7, categoria:'Comunion', nombre: 'Muñequito Bautismo', precio: 500, foto: './img/productoComunionFran.jpg'},
    {id:8, categoria:'Bautismo', nombre: 'Ovejita romántica', precio: 600, foto: './img/productoBautismoOveja.jpg'},
    {id:9, categoria:'Bautismo', nombre: 'Angelito guardián', precio: 450, foto: './img/productoBautismoAngel.jpg'},
    {id:10, categoria:'Especial', nombre: 'Día del Padre Kraft', precio: 600, foto: './img/productoPadreRustico.jpg'},
    {id:11, categoria:'Especial', nombre: 'San Valentín', precio: 700, foto: './img/productoSanValentin.jpg'},
    {id:12, categoria:'Especial', nombre: 'Pascuas', precio: 550, foto: './img/productoPascuas.jpg'},
]

let cards = ``;
productos.forEach((producto) => {
    cards += `<div class="col-md-4 mb-3 cards__cardKit">
    <div class="card producto">
        <img src="${producto.foto}" class="card-img-top" alt="pascuas">
        <div class="card-body">
         <h5 class="card-title cards__cardTitle">${producto.nombre}</h5>
         <p class="card-text cards__cardText">$${producto.precio}</p>
         <a href="#" onclick="agregarAlCarrito(${producto.id})" class="btn cards__botonCartas" onclick="agregarAlCarrito()" >Agregar a carrito</a>
        </div>
    </div>
  </div>`
});

document.getElementById('card-container').innerHTML = cards;



function agregarAlCarrito(id){
    const resultado = productos.find ((producto) => producto.id === id);
    carrito.push(resultado);
    console.log(resultado);
    const totalCarrito = carrito.reduce((cards, producto) => cards + producto.precio, 0);
    document.getElementById("total").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>`+ "$" + totalCarrito;
    console.log("El total de tu compra es de " + totalCarrito);
}








/*

let dreams = 500;
let cupon = dreams;

function descuentoCompra (){
const cuponIngresado = prompt("Ingresa tu código de este mes para acceder a un descuento exclusivo!");
    if (cuponIngresado.toLowerCase()==="fin" || cuponIngresado.toLowerCase()==="esc"){
        alert("Lo sentimos, no podremos aplicarte un descuento")
         }else{
          descuento = totalCarrito - dreams;
         }
    }

    descuentoCompra();

*/







/*
// ORDENO DE MENOR A MAYOR PRECIO

productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    return 0;
});
console.log(productos);
*/





/*


// UTILIZO FUNCIÓN PARA CALCULAR COSTO FINAL CON IVA

let iva = 1.21;
let totalIva = 0;

function calcularIva (a, b){
    totalIva = a * b;
    mostrar();
}
calcularIva(totalCarrito,iva);

function mostrar (){
    console.log("El precio final con iva es de $" + totalIva);
}
*/