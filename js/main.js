const productos = [
    {
        id: 1,
        nombre: "ZAPATILLAS DURAMO SL",
        img: "./img/Zapatillas_Duramo.jpg",
        precio: 27.999
    },
    {
        id: 2,
        nombre: "ZAPATILLAS GRAND",
        img: "./img/ZAPATILLAS GRAND COURT BASE 2.0.jpg",
        precio: 46.999
    },
    {
        id: 3,
        nombre: "ZAPATILLAS FORUM LOW",
        img: "./img/ZAPATILLAS FORUM LOW.jpg",
        precio: 89.999
    },
    {
        id: 4,
        nombre: "ZAPATILLAS RAPIDMOVE",
        img: "./img/ZAPATILLAS RAPIDMOVE.jpg",
        precio: 76.999
    },
]

// ...

productos.forEach(producto => {
    const ContenedorDiv1 = document.getElementById("caja1");

    ContenedorDiv1.innerHTML += `
    <div class="card cajas" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}$</p>
            <a href="#" class="btn btn-primary linkBtn">Añadir al carrito</a>
        </div>
    </div>`
});

// Selecciona todos los botones generados
const botones = document.querySelectorAll(".linkBtn");

// Inicializa el carrito y el total
const carrito = {
    productos: [],
    total: 0
};

// Asigna el evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener("click", function () {
        const divProducto = boton.closest(".card");
        const nombre = divProducto.querySelector(".card-title").textContent;
        const precioTexto = divProducto.querySelector(".card-text").textContent;
        const precio = parseFloat(precioTexto.replace(/\D/g, '')); // Extrae el precio numérico
        const producto = { nombre, precio };

        carrito.productos.push(producto);
        carrito.total += precio;

        // Puedes actualizar la vista del carrito
        actualizarCarritoEnDOM();
    });
});

// Función para actualizar el carrito en el DOM
function actualizarCarritoEnDOM() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = ""; // Limpiar el contenido anterior

    carrito.productos.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `<span>${producto.nombre} - $${producto.precio.toFixed(2)}</span>`;
        carritoElement.appendChild(item);
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("carrito-total");
    totalElement.innerHTML = `
    Total: $${carrito.total.toFixed(2)}
    `;
    carritoElement.appendChild(totalElement);
}

// Carrito HTML
const carritoHtml = document.getElementById("carrito");
carritoHtml.innerHTML = `<h3>CARRITO</h3>`;

// Agrega un evento de entrada de texto al elemento de búsqueda
filtroInput.addEventListener("input", filtrarProductos);

function filtrarProductos() {
    const filtroTexto = filtroInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

    // Filtrar productos que coincidan con el término de búsqueda
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtroTexto));

    // Obtén el elemento "filter" donde mostrarás los productos filtrados
    const imprimirFilter = document.getElementById("filter");

    // Limpia la lista ordenada (ol) antes de agregar los elementos
    imprimirFilter.innerHTML = '';

    // Itera a través de los productos filtrados y agrega sus nombres a la lista
    productosFiltrados.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        imprimirFilter.appendChild(li);
    });
}







