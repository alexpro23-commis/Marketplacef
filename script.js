// Lista de productos
const productos = [
  { nombre: "Pan artesanal", precio: 40, imagen: "pan.jpeg" },
  { nombre: "Areglos florales", precio: 90, imagen: "flores.jpeg" },
  { nombre: "Playeras", precio: 150, imagen: "playera.jpg" },
  { nombre: "pantalones", precio: 120, imagen: "pantalon.jpeg" },
  { nombre: "Agua de sabores", precio: 80, imagen: "aguas.jpeg" },
  { nombre: "Consola de videojuegos", precio: 80, imagen: "videogame.jpeg" },
  { nombre: "Telefonos", precio: 90, imagen: "telefone.jpeg" },
  {  nombre: "Visicleta", precio: 90, imagen: "vici.jpg"  },
  { nombre: "Computadoras", precio: 80, imagen: "compu.jpg" }

];

const contenedor = document.getElementById("productos");

// Mostrar productos
function mostrarProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
        <button class="comprar" onclick="comprar('${p.nombre}')">Comprar</button>
      </div>
    `;
  });
}

// Función de búsqueda
function buscarProducto() {
  const texto = document.getElementById("buscar").value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  mostrarProductos(filtrados);
}

// Simulación de compra
function comprar(nombre) {
  alert("Has comprado: " + nombre + " ✅");
}

// Mostrar todos al inicio
mostrarProductos(productos);
