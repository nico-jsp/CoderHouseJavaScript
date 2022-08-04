
let menuApp = " \n a - agregar uno/otro curso \n q - quitar un curso \n 1 para pagar \n 0 para salir:"
let nroIngresado = "";

let cursosAInscribirse = [];
let totalAPagar = 0;
let carrito = [];


var listaDeCursos = [
    {
        id: 1,
        titulo: "Aspectos psicológicos en el crossfit I",
        descripcion: "",
        caracteristicas: {
            numEncuentros: 1,
            horasCatedra: 4,
            tipoEncuentro: ["Presencial"],
        },
        publico: "todos",
        precio: 50,
    },
    {
        id: 2,
        titulo: "Aspectos psicológicos en el crossfit II",
        descripcion: "",
        caracteristicas: {
            numEncuentros: 1,
            horasCatedra: 4,
            tipoEncuentro: ["Presencial"],
        },
        publico: "todos",
        precio: 80,
    },
    {
        id: 3,
        titulo: "Liderazgo en el crossfit",
        descripcion: "",
        caracteristicas: {
            numEncuentros: 1,
            horasCatedra: 5,
            tipoEncuentro: ["Presencial", "Online"],
        },
        publico: "coaches",
        precio: 90,
    },
    {
        id: 4,
        titulo: "La comunicacion en el box",
        descripcion: "",
        caracteristicas: {
            numEncuentros: 1,
            horasCatedra: 2,
            tipoEncuentro: ["Presencial", "Online"],
        },
        publico: "coaches",
        precio: 90,
    },
    {
        id: 5,
        titulo: "PSICO-STRENGTH: Entrenamiento mental para atletas",
        descripcion: "",
        caracteristicas: {
            numEncuentros: 4,
            horasCatedra: 8,
            tipoEncuentro: ["Presencial"],
        },
        publico: "atletas",
        precio: 90,
    }
];

// Funciones

//Imprimir Curso
function imprimirCurso(i) {
    let curso = listaDeCursos[i].id + "- " + listaDeCursos[i].titulo + " - USD " + listaDeCursos[i].precio;
    return curso;
}


//Imprimir lista de cursos

function listarCursos() {
    let lista = "Cursos:\n";
    let linea = "";
    for (const curso of listaDeCursos) {
        // linea = imprimirCurso(i);
        linea = curso.id + "- " + curso.titulo + " - USD " + curso.precio;

        lista = lista + linea + "\n";
        console.log("aca imprimo la lista " + lista);
    }
    return lista;
}



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

    cursosAInscribirse.push(nroIngresado);
    totalAPagar = totalAPagar + listaDeCursos[nroIngresado - 1].precio;
}

// Quitar del carrito
function quitarDelCarrito(nroIngresado) {

    let posicion = cursosAInscribirse.indexOf(nroIngresado);
    cursosAInscribirse.splice(posicion, 1);
    totalAPagar = totalAPagar - listaDeCursos[nroIngresado - 1].precio;



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
console.log(listaDeCursos);
let listado = listarCursos();

let accion = prompt("Ingrese una accion a realizar:" + menuApp);
while (accion != "0" && accion != "1") {
    nroIngresado = prompt("Seleccione un curso (del 1 al " + listaDeCursos.length + ") \n" + listado);
    accionar(nroIngresado, accion);
    accion = prompt("Ingrese una accion a realizar:" + menuApp + "\n\nSu Carro: \n" + carrito);
}
if (accion == "1") {
    alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")
}

