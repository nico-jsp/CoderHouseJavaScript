
let menuApp = " \n a - agregar uno/otro curso \n q - quitar un curso \n 1 para pagar \n 0 para salir:"
let nroIngresado = "";

let cantidadCarritoWeb = 0;
document.getElementById("carritoWeb").value = cantidadCarritoWeb;
const btnVerCarrito = document.getElementById('verCarro');

let totalAPagar = 0;
let carrito = [];
let carritoWeb = [];

const btnMetodoPago = document.getElementById('btnMetodoPago');
const btnfinCompra = document.getElementById('finCompra');
const btnCerrarCarrito = document.getElementById('closeCarrito');
const modalCarrito = document.getElementById('modal__container');
const modalMetodoPago = document.getElementById('modal__payment');
const carritoHTML = document.getElementById('modal__body');
const modalInputMetodoPago = document.getElementById('modal__payment__body');
const cursosListados = document.getElementById("workshops__list");
const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.getElementById('btn-abrir-formulario');
const formularioTarjeta = document.getElementById('formulario-tarjeta');
const numeroTarjeta = document.querySelector('#numero .numero');
const nombreTarjeta = document.querySelector('#nombre .nombre');
const logoMarca = document.getElementById('logo-marca');
const firma = document.querySelector('#firma .firma p');
const mesExpiracion = document.querySelector('#expirationDate .mes');
const yearExpiracion = document.querySelector('#expirationDate .year');
const ccv = document.querySelector('#tarjeta .ccv');

// Rotamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}


// renderizarProductos();
getJSON();


let cursosAInscribirse = [];
if (localStorage.getItem("cursosAInscribirse")) {

    cursosAInscribirse = JSON.parse(localStorage.getItem("cursosAInscribirse"));
    carritoWeb = JSON.parse(localStorage.getItem("cursosAInscribirse"));
    // cantidadCarritoWeb = cursosAInscribirse.length;
    cantidadCarritoWeb = carritoWeb.length;
    document.getElementById("carritoWeb").value = cantidadCarritoWeb;
    if (cantidadCarritoWeb > 0) {

        btnVerCarrito.innerHTML = `
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
                      <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                      </svg>
                      `;

    }
}

// Funciones

//Get JSON de cursos.json
async function getJSON() {
    //Definimos la URL
    const URLJSON = "/json/cursos.json"
    //Hacemos un Fetch a la URL
    const resp = await fetch(URLJSON)
    //Pasamos el JSON a array de objetos
    const data = await resp.json()
    //Lo copiamos a nuestra variable
    listaDeCursos = data;
    //Renderizamos nuestros productos, en este caso, cursos
    renderizarProductos();
}

//Agregar al carrito
function agregarAlCarrito(nroIngresado) {


    cursosAInscribirse.push(listaDeCursos[nroIngresado - 1]);
    totalAPagar = totalAPagar + listaDeCursos[nroIngresado - 1].precio;
    localStorage.setItem("cursosAInscribirse", JSON.stringify(cursosAInscribirse));


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

    } else {
        console.log(posicion)
        alert("El curso que se desea borrar no esta en el carrito");
    }


}

// Funciones de botones

function verCarrito() {

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
    // const botonPagar = document.createElement("button");
    // botonPagar.className = "botonPagar";
    // botonPagar.innerText = "Finalizar Compra";
    // botonPagar.id = "botonPagar"
    // carritoHTML.append(botonPagar);


}
//Boton Comprar del curso "i"
function pressButton(i) {
    agregarAlCarrito(i);

    carritoWeb.push(listaDeCursos[i - 1]);
    //Sumar 1 a la cantidad de cursos en el carrito
    cantidadCarritoWeb += 1;
    document.getElementById("carritoWeb").value = cantidadCarritoWeb;
    //Cambio el icono del carrito. Taza vacia - Taza con humito
    if (cantidadCarritoWeb > 0) {
        btnVerCarrito.innerHTML = `
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
                      <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                      </svg>
                      `;

    }
    Swal.fire(
        "Curso: " + listaDeCursos[i - 1].titulo,
        "Agregado al carrito",
        "success"
    );

};

//Remover curso del carrito
function removeCursoDeCarrito(i) {
    quitarDelCarrito(i);
    // imprimirCarrito();
    carritoHTML.innerHTML = "";
    verCarrito();
    if (cantidadCarritoWeb == 0) {
        // console.log(btnVerCarrito.innerHTML)
        btnVerCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"/>
      </svg>`;

    }

}


// Lista de Cursos - renderizado
function renderizarProductos() {
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
        // href="" onclick='pressButton(${curso.id})
        cursosListados.append(item);


    }
    // Falta quitar el "href="" onclick='pressButton(${curso.id})" y ver por que cuando se carga se carga uno de cada uno tambien
    // listaDeCursos.forEach(curso => {
    //     //evento individual para cada boton
    //     document.getElementById(`boton${curso.id}`).addEventListener("click", pressButton(curso.id));
    // });

}

//Boton para mostrar el estado actual del carrito
btnVerCarrito.addEventListener('click', () => {


    if (!modalCarrito.classList.contains("show")) {
        verCarrito();
        modalCarrito.classList.add('show');;
    }

});

//Boton cerrar carrito de compra
btnCerrarCarrito.addEventListener('click', () => {
    modalCarrito.classList.remove('show');
    carritoHTML.innerHTML = "";

});

//Boton fin de compra
btnfinCompra.addEventListener('click', () => {

    if (((numeroTarjeta.innerText != '') && (numeroTarjeta.innerText.length == 19)) && (nombreTarjeta.innerText != '')
        && (mesExpiracion.innerText != 'Mes')
        && (yearExpiracion.innerText != 'Año')
        && (ccv.innerText != '')) {
        let total = 0;
        for (const curso of cursosAInscribirse) {
            total += curso.precio;
        }

        setTimeout(() => {

            eventoPagar(true);

            // Cierra timer
        }, 30000);

        cursosAInscribirse = [];
        localStorage.clear("cursosAInscribirse");
        modalCarrito.classList.remove('show');
        carritoHTML.innerHTML = "";
        cantidadCarritoWeb = 0;
        document.getElementById("carritoWeb").value = cantidadCarritoWeb;
        btnVerCarrito.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z"/>
      </svg>`;

        // Timer para procesar el pago
        // console.log('aca llega antes de la funcion que carga')
        console.log('aca llega antes de la PROMISE')




        // Confirmacion de compra exitosa
        Swal.fire(
            "Ud ha realizado una compra",
            `Su pago de USD${total} fue acreditado. A disfrutar de los cursos!!!`,
            "success"
        );


    };
})


// Funcion carga la venta y pasa los datos de la tarjeta para el pago
// Solo para esperar una promesa y que paso un "tiempo"

const eventoPagar = (info) => {

    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        if (info) {
            let timerInterval
            Swal.fire({
                title: 'Procesando el pago',
                html: 'Por favor espere.',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')

                }
            })
            return resolve('Promesa Resuelta')

        } else {
            return reject('Promesa Rechazada');
        }
        // }, 5000)
        console.log('aca llega antes de la funcion que carga con la promise')

    })

}




//Boton Metodo de Pago
btnMetodoPago.addEventListener('click', () => {

    if (!modalMetodoPago.classList.contains("show")) {
        modalMetodoPago.classList.add('show');;
    }

})

// Animacion tarjeta

// Rotacion de tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
})

// Boton abrir formulario 
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formularioTarjeta.classList.toggle('active');
})


// Select del Mes
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formularioTarjeta.selectMes.appendChild(opcion);

}

// Select del año
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formularioTarjeta.selectYear.appendChild(opcion);

}

// Input numero de tarjeta
formularioTarjeta.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formularioTarjeta.inputNumero.value = valorInput
        // Eliminamos los espacios en Blanco
        .replace(/\s/g, '')
        // Elimina las letras
        .replace(/\D/g, '')
        // Agregamos un espacio cada 4 numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espacio
        .trim();


    numeroTarjeta.textContent = valorInput;
    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.classList.toggle('img-card');
        imagen.src = '../assets/img/card/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.classList.toggle('img-card');
        imagen.src = '../assets/img/card/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // Rotamos la tarjeta cuando el usuario escribe
    mostrarFrente();

});

// Input Nombre de Tarjeta
formularioTarjeta.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formularioTarjeta.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Juan Perez';
    }

    mostrarFrente();
});

// Select de el mes
formularioTarjeta.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// Select de el año
formularioTarjeta.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// Codigo CCV
formularioTarjeta.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formularioTarjeta.inputCCV.value = formularioTarjeta.inputCCV.value
        // Eliminamos los espacios en Blanco
        .replace(/\s/g, '')
        // Elimina las letras
        .replace(/\D/g, '');

    ccv.textContent = formularioTarjeta.inputCCV.value;
});










