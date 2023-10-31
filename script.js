var imagenes = [
  "Peliculas/imagen10.jpg",
  "Peliculas/imagen2.jpg",
  "Peliculas/imagen3.jpg",
  "Peliculas/imagen4.jpg",
  "Peliculas/imagen6.jpg",
  "Peliculas/imagen7.jpg",
  "Peliculas/imagen8.jpg",
  "Peliculas/imagen9.jpg",
  // Agrega aquí más URL de imágenes
];
// Arreglo para almacenar los índices de las imágenes ya mostradas
var imagenesMostradas = [];

// Función para obtener un número aleatorio que no se haya mostrado antes
function obtenerIndiceAleatorio() {
  var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  while (imagenesMostradas.includes(indiceAleatorio)) {
    indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  }
  imagenesMostradas.push(indiceAleatorio);
  if (imagenesMostradas.length === imagenes.length) {
    imagenesMostradas = [];
  }
  return indiceAleatorio;
}

// Función para actualizar la imagen en el carrusel
function actualizarImagen() {
  var indiceAleatorio = obtenerIndiceAleatorio();
  var imagen = document.getElementById("carrusel");
  imagen.src = imagenes[indiceAleatorio];
}

// Intervalo de tiempo para cambiar la imagen (en milisegundos)
var intervalo = 3000; // Cambiar cada 3 segundos

// Iniciar el carrusel
setInterval(actualizarImagen, intervalo);