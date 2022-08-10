
let menuApp = " \n a - agregar uno/otro curso \n q - quitar un curso \n 1 para pagar \n 0 para salir:"
let nroIngresado = "";

let cursosAInscribirse = [];
let totalAPagar = 0;
let carrito = [];
let carritoWeb = [];


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


//Imprimir lista de cursos

function listarCursos() {
    let lista = "Cursos:\n";
    let linea = "";
    for (const curso of listaDeCursos) {
        linea = curso.id + "- " + curso.titulo + " - USD " + curso.precio;

        lista = lista + linea + "\n";
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

let listado = listarCursos();

// let accion = prompt("Ingrese una accion a realizar:" + menuApp);
// while (accion != "0" && accion != "1") {
// nroIngresado = prompt("Seleccione un curso (del 1 al " + listaDeCursos.length + ") \n" + listado);
// accionar(nroIngresado, accion);
// accion = prompt("Ingrese una accion a realizar:" + menuApp + "\n\nSu Carro: \n" + carrito);
// }
// if (accion == "1") {
// alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")
// }
{/* <div class="workshop" data-aos="zoom-out">
<h3>(2) Aspectos psicológicos en el crossfit II</h3>
<p>
    (Taller para todos USD 80)
</p>
<ul>
    <li>1 encuentro</li>
    <li>4 horas</li>
    <li>Presencial</li>
</ul>

<a href="">
    Comprar
</a>
</div> */}

// inicializamos el carrito

let cantidadCarritoWeb = 0;
document.getElementById("carritoWeb").value = cantidadCarritoWeb;
// Funciones de botones

function verCarrito() {
    imprimirCarrito()
    alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")

}

function pressButton(i) {
    agregarAlCarrito(i);

    carritoWeb.push(listaDeCursos[i - 1]);
    cantidadCarritoWeb += 1;
    document.getElementById("carritoWeb").value = cantidadCarritoWeb;

    console.log(document.getElementById("carritoWeb").value);
    console.log(cantidadCarritoWeb);
    console.log(carrito)
};


// Lista de Cursos
let cursosListados = document.getElementsByClassName("workshops__list");
for (const curso of listaDeCursos) {
    let caracteristics = document.createElement("ul");
    caracteristics.className = "caracteristica";
    caracteristics.innerHTML = `
        <li>Encuentros: ${curso.caracteristicas.numEncuentros}</li>
        <li>Horas: ${curso.caracteristicas.horasCatedra}</li>
        <li>Tipo de Encuentro: ${curso.caracteristicas.tipoEncuentro}</li>
        `;


    let item = document.createElement("div");
    item.className = "workshop";
    item.innerHTML = `
        <h3>${curso.id} - ${curso.titulo}</h3>
        <p>
            (Taller para ${curso.publico} - USD ${curso.precio})
        </p>
            ${caracteristics.outerHTML}
        <button id=boton${curso.id} href="" onclick='pressButton(${curso.id})'>
        Comprar
        </button>
    `;

    cursosListados[0].append(item);
}


