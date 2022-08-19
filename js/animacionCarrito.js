
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
    // console.log(localStorage.getItem("cursosAInscribirse"));

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
        // console.log(localStorage.getItem("cursosAInscribirse"));

    } else {
        alert("El curso que se desea borrar no esta en el carrito");
    }


}



// function accionar(nroIngresado, accion) {

//     if (accion == "a") {
//         agregarAlCarrito(nroIngresado);
//         imprimirCarrito();
//     }
//     if (accion == "q") {
//         quitarDelCarrito(nroIngresado);
//         imprimirCarrito();

//     }

// }


// Logica a seguir

let listado = listarCursos();


// inicializamos el carrito

let cantidadCarritoWeb = 0;
document.getElementById("carritoWeb").value = cantidadCarritoWeb;

const btnVerCarrito = document.getElementById('verCarro');
const btnCerrarCarrito = document.getElementById('closeCarrito');
const modalCarrito = document.getElementById('modal__container');
const carritoHTML = document.getElementById('modal__body');


// Funciones de botones

function verCarrito() {
    // imprimirCarrito()
    // imprimir carrito en la ventana Modal
    // console.log(cursosAInscribirse);
    // const carritoHTML = document.getElementById('modal__body');
    let total = 0;
    for (const curso of cursosAInscribirse) {
        // document.getElementById("carritoWeb").value = cantidadCarritoWeb;
        const lineaCarrito = document.createElement("div");
        lineaCarrito.className = "lineaCarrito";
        lineaCarrito.innerHTML = `
           ${curso.id} - ${curso.titulo}
           <button id=boton${curso.id} class="btn__workshop" href="" onclick='removeCursoDeCarrito(${curso.id})'>
        X
        </button>  
        `;
        total += curso.precio;
        carritoHTML.append(lineaCarrito);
    }

    const totalCarrito = document.createElement("div");
    totalCarrito.className = "totalCarrito";
    totalCarrito.innerHTML = `Total a Pagar: USD${total}`;

    carritoHTML.append(totalCarrito);
    const botonPagar = document.createElement("button");
    botonPagar.className = "botonPagar";
    botonPagar.innerText = "Finalizar Compra";
    carritoHTML.append(botonPagar);

}




function pressButton(i) {
    agregarAlCarrito(i);

    carritoWeb.push(listaDeCursos[i - 1]);
    cantidadCarritoWeb += 1;
    document.getElementById("carritoWeb").value = cantidadCarritoWeb;
    if (cantidadCarritoWeb > 0) {
        console.log(btnVerCarrito.innerHTML)
        btnVerCarrito.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
  <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
</svg>
`;

    }

};

function removeCurso(i) {
    quitarDelCarrito(i);
    imprimirCarrito();


}
function removeCursoDeCarrito(i) {
    quitarDelCarrito(i);
    imprimirCarrito();
    carritoHTML.innerHTML = "";
    verCarrito();
    if (cantidadCarritoWeb == 0) {
        console.log(btnVerCarrito.innerHTML)
        btnVerCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"/>
      </svg>`;

    }

}


// Lista de Cursos
const cursosListados = document.getElementsByClassName("workshops__list");
for (const curso of listaDeCursos) {
    let caracteristics = document.createElement("ul");
    caracteristics.className = "caracteristica";
    caracteristics.innerHTML = `
        <li>Encuentros: ${curso.caracteristicas.numEncuentros}</li>
        <li>Horas: ${curso.caracteristicas.horasCatedra}</li>
        <li>Tipo de Encuentro: ${curso.caracteristicas.tipoEncuentro}</li>
        `;


    const item = document.createElement("div");
    item.className = "workshop";
    item.innerHTML = `
        <h3>${curso.id} - ${curso.titulo}</h3>
        <p>
            (Taller para ${curso.publico} - USD ${curso.precio})
        </p>
            ${caracteristics.outerHTML}
        <button id=boton${curso.id} class="btn__workshop" href="" onclick='pressButton(${curso.id})'>
        Comprar
        </button>
        

    `;

    cursosListados[0].append(item);

}


btnVerCarrito.addEventListener('click', () => {


    if (!modalCarrito.classList.contains("show")) {
        verCarrito();
        modalCarrito.classList.add('show');
    }

});

btnCerrarCarrito.addEventListener('click', () => {
    modalCarrito.classList.remove('show');
    carritoHTML.innerHTML = "";

});









