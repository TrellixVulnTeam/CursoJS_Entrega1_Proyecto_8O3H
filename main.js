//Class Objeto Servicio

class objetoServicio {
    constructor(objetoLiteral) {
        this.id = objetoLiteral.id;
        this.nombreServicio = objetoLiteral.nombreServicio;
        this.descripcion = objetoLiteral.descripcion;
        this.precio = objetoLiteral.precio;
        this.vendido = false;
        this.stock = true;
    }
}

//Array de objetos

const serviciosWeb = [
    { id: 1, nombreServicio: "Landing Page", descripcion: "Las landing pages son páginas web promocionales que se crean para dar a conocer un producto o servicio en concreto a través de una única página web, sin páginas interiores. Es una manera excelente de fortalecer tu marca", precio: 10000 },

    { id: 2, nombreServicio: "Sitio web", descripcion: "El sitio web es el conjunto de varias páginas web que se agrupan para cumplir determinados objetivos, sin embargo, estos tienen un propósito común: ser la carta de presentación de un negocio en el mundo del internet.", precio: 20000 },

    { id: 3, nombreServicio: "Tienda online", descripcion: "Son aquellos sitios que permiten realizar un comercio electrónico mediante el sitio web, también llamados como carritos de compras o ventas. Estos sitios web permiten realizar transacciones entre comprador y vendedor.", precio: 30000 }];

/* console.log(serviciosWeb); */


//convertir a los objetos literales en objetos servicios
//Primero crear un nuevo array

const listaDeObjetosServicio = [];
for (const servicio of serviciosWeb) {
    listaDeObjetosServicio.push(new objetoServicio(servicio));
}
/* console.log(listaDeObjetosServicio); */

let nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre + " te cuento que tengo estos servicios para ofrecerte: " + "ID 1: Landing Page // ID2: Landing Page //ID 3: Tienda Online");

//Metodo find por ID / Buscar un producto por ID // Interaccción con el usuario
let idBuscado = parseInt(prompt("Ingrese el ID que desea"));
const idEncontrado = listaDeObjetosServicio.find(servicio => servicio.id == idBuscado);
console.log(idEncontrado);

