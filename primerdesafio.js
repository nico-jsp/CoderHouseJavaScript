
let mensajeCursos = "\n (1) Aspectos psicológicos en el crossfit I - USD 50 \n (2) Aspectos psicológicos en el crossfit II - USD 80 \n (3) Liderazgo en el crossfit - USD 90 \n (4) La comunicación en el box - USD 90 \n (5) PSICO-STRENGTH: Entrenamiento mental para atletas - USD 90";
let menuApp = " \n a - agregar uno/otro curso \n q - quitar un curso \n 1 para pagar \n 0 para salir:"
let nroIngresado = "";

let cursosAInscribirse = [];
let totalAPagar = 0;
let carrito = [];
let precios = [50, 80, 90, 90, 90];

// // Funciones

// Armar carrito
function imprimirCarrito() {
    let i = 0;
    let items = cursosAInscribirse.length;


    carrito = "";
    while (i < items) {

        carrito = carrito + "- ";
        carrito = carrito + " " + cursosAInscribirse[i];
        carrito = carrito + "\n";
        i++;

    };

    carrito = carrito + "\nTotal a pagar: " + totalAPagar;


}
//Agregar al carrito
function agregarAlCarrito(nroIngresado) {

    switch (nroIngresado) {
        case "1":
            cursosAInscribirse.push("1");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            break;
        case "2":
            cursosAInscribirse.push("2");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            break;
        case "3":
            cursosAInscribirse.push("3");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];

            break;
        case "4":
            cursosAInscribirse.push("4");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            break;
        case "5":
            cursosAInscribirse.push("5");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            break;
        default:
            break;

    }

}
// Quitar del carrito
function quitarDelCarrito(nroIngresado) {

    let posicionCursoABorrar = cursosAInscribirse.indexOf(nroIngresado);

    cursosAInscribirse.splice(posicionCursoABorrar, 1);

    totalAPagar = totalAPagar - precios[nroIngresado - 1];


}

function accionar(nroIngresado, accion) {

    if (accion == "a") {
        agregarAlCarrito(nroIngresado);
        imprimirCarrito();
    }
    if (accion == "q") {
        quitarDelCarrito(nroIngresado);
        imprimirCarrito();

    }

}


// Logica a seguir
let accion = prompt("Ingrese una accion a realizar:" + menuApp);
while (accion != "0" && accion != "1") {
    nroIngresado = prompt("Seleccione un curso (del 1 al 5) \n" + mensajeCursos);
    accionar(nroIngresado, accion);
    accion = prompt("Ingrese una accion a realizar:" + menuApp + "\n\nSu Carro: \n" + carrito);
}
if (accion == "1") {
    alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")
}

