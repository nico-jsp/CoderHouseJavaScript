
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

        carrito = carrito + "* ";
        carrito = carrito + " " + cursosAInscribirse[i].id + " - " + cursosAInscribirse[i].titulo;
        carrito = carrito + "\n";
        i++;

    };

    carrito = carrito + "\nTotal a pagar: " + totalAPagar;


}
//Agregar al carrito
function agregarAlCarrito(nroIngresado) {

    // cursosAInscribirse.push(nroIngresado);
    cursosAInscribirse.push(listaDeCursos[nroIngresado - 1]);
    totalAPagar = totalAPagar + listaDeCursos[nroIngresado - 1].precio;
    localStorage.setItem("cursosAInscribirse", JSON.stringify(cursosAInscribirse));
    console.log(localStorage.getItem("cursosAInscribirse"));

}

// Quitar del carrito
function quitarDelCarrito(nroIngresado) {

    let posicion = cursosAInscribirse.indexOf(listaDeCursos[nroIngresado - 1]);
    if (posicion != -1) {
        cursosAInscribirse.splice(posicion, 1);
        totalAPagar = totalAPagar - listaDeCursos[nroIngresado - 1].precio;
        cantidadCarritoWeb -= 1;
        document.getElementById("carritoWeb").value = cantidadCarritoWeb;
        localStorage.setItem("cursosAInscribirse", JSON.stringify(cursosAInscribirse));
        console.log(localStorage.getItem("cursosAInscribirse"));

    } else {
        alert("El curso que se desea borrar no esta en el carrito");
    }


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


// inicializamos el carrito

let cantidadCarritoWeb = 0;
document.getElementById("carritoWeb").value = cantidadCarritoWeb;
// Funciones de botones

function verCarrito() {
    imprimirCarrito()

    // let carritoVentana = document.createElement("div");
    // carritoVentana.innerHTML = `<div id="carrWeb" class="modal">
    // <div class="modal-content">
    // ${carrito}
    // <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    // <span aria-hidden="true">close</span>
    // </button>
    // </div>
    // </div>
    // `;
    // document.append(carritoVentana);
    // carritoVentana.style.display = 'block';
    // $('#carrWeb').show();
    // console.log(carritoVentana);


    alert("Su carrito es: \n" + carrito + "\n\nMuchas gracias por su compra.")

}




function pressButton(i) {
    agregarAlCarrito(i);

    carritoWeb.push(listaDeCursos[i - 1]);
    cantidadCarritoWeb += 1;
    document.getElementById("carritoWeb").value = cantidadCarritoWeb;

};

function removeCurso(i) {
    quitarDelCarrito(i);
    imprimirCarrito();


}


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
        <button id=boton${curso.id} href="" onclick='removeCurso(${curso.id})'>
        Eliminar
        </button>

    `;

    cursosListados[0].append(item);

}


