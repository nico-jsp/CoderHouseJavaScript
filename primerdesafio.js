
let mensajeCursos = "\n (1) Aspectos psicológicos en el crossfit I - USD 50 \n (2) Aspectos psicológicos en el crossfit II - USD 80 \n (3) Liderazgo en el crossfit - USD 90 \n (4) La comunicación en el box - USD 90 \n (5) PSICO-STRENGTH: Entrenamiento mental para atletas - USD 90";
let menuApp = " \n a - agregar uno/otro curso \n q - quitar un curso \n 1 para pagar \n 0 para salir:"
let nroIngresado = "";

let cursosAInscribirse = [];
let totalAPagar = 0;
let carrito = "";
let precios = [50, 80, 90, 90, 90];

// Funciones

// Armar carrito
function imprimirCarrito() {
    let i = 0;
    let items = cursosAInscribirse.length;
    console.log(cursosAInscribirse);
    console.log(totalAPagar);
    carrito = "";
    while (i < items) {

        carrito = carrito + "- ";
        carrito = carrito + " " + cursosAInscribirse[i];
        carrito = carrito + "\n";
        i++;

    };

    carrito = carrito + "\nTotal a pagar: " + totalAPagar;
    console.log(carrito);

}
//Agregar al carrito
function agregarAlCarrito(nroIngresado) {
    let curso = parseInt(nroIngresado);
    switch (nroIngresado) {
        case "1":
            cursosAInscribirse.push("1");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            break;
        case "2":
            cursosAInscribirse.push("2");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            console.log(cursosAInscribirse);
            console.log(totalAPagar);
            break;
        case "3":
            cursosAInscribirse.push("3");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            console.log(cursosAInscribirse + precios[nroIngresado - 1]);
            console.log(totalAPagar);
            break;
        case "4":
            cursosAInscribirse.push("4");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            console.log(cursosAInscribirse);
            console.log(totalAPagar);
            break;
        case "5":
            cursosAInscribirse.push("5");
            totalAPagar = totalAPagar + precios[nroIngresado - 1];
            console.log(cursosAInscribirse);
            console.log(totalAPagar);
            break;
        default:
            break;

    }

}
// Quitar del carrito
function quitarDelCarrito(nroIngresado) {

    let i = 0;
    let curso = parseInt(nroIngresado);
    let cursoBorrado = 0;
    let arrayAuxiliarCursos = [];

    for (let z = 0; z < cursosAInscribirse.length; z++) {
        if (cursosAInscribirse[z] != nroIngresado && cursoBorrado == 0) {
            arrayAuxiliarCursos.push(cursosAInscribirse[z]);

        }


    }
    cursosAInscribirse = arrayAuxiliarCursos;
    totalAPagar = totalAPagar - precios[nroIngresado - 1];


}

function accionar(nroIngresado, accion) {

    if (accion == "a") {
        agregarAlCarrito(nroIngresado);
        console.log("aca llega antes de romperse");
        imprimirCarrito();
    }
    if (accion == "q") {
        quitarDelCarrito(nroIngresado);
        imprimirCarrito();

    }

}


// Logica a seguir
let accion = prompt("Ingrese una accion a realizar:" + menuApp);
console.log("La accion seleccionada fue:" + accion)
while (accion != "0" && accion != "1") {
    nroIngresado = prompt("Seleccione un curso (del 1 al 5) \n" + mensajeCursos);
    console.log("El numero ingresado fue:" + nroIngresado);
    console.log("entra");

    accionar(nroIngresado, accion);
    console.log("sale");


    accion = prompt("Ingrese una accion a realizar:" + menuApp + "\n\nSu Carro: \n" + carrito);
}
if (accion == "1") {
    alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")
}

