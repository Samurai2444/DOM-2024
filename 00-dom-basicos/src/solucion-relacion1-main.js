const init = () => { };



//--------------------Inicio de la aplicación---------------

/*
    document.addEventListener("DOMContentLoaded", init );
    //Todos los eventos son asincronos no es necesario poner async
    //2 medidas de seguridad que hace que asta que el DOM no se cargue no empieza a funcionar el evento
*/

document.addEventListener("DOMContentLoaded", () => init() );
//Para que la funcion tenga parametros



document.addEventListener("DOMContentLoaded", () => {
    //Ejercicio 1 
    //
    console.log("1. Selecciona el elemento `h1` por su ID.");
    //Version lenta
    const elementDiv = document.getElementById("contenedorPrincipal");
    const elementH1 = elementDiv.querySelector("h1");
    console.log(elementH1.textContent);
    //para sacar solo el texto
    console.log(elementH1);
    //Para sacar toda la etiqueta

    //Version rapida
    const elementH1v2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
    console.log(elementH1v2);

    console.log("2. Selecciona todos los párrafos con la clase 'parrafo' dentro del `contenedorSecundario`");
    const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
    console.log(parrafosDiv);
    //queryAll selecciona por clases usando los selectores de css

    console.log("3. Selecciona el elemento `img` por su atributo `src`.");
    const elementImg= document.querySelector('img[src="imagen.png"]');
    //Al filtrar no es necesario poner comillas
    console.log(elementImg);

    console.log("4. Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`."); 
    const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
    console.log(elementsSpan);

    console.log("5. Selecciona el primer párrafo con la clase 'importante'.");
    const primerParrafoImportante = document.querySelector(".parrafo.importante")
    console.log(primerParrafoImportante);

    console.log("6. Selecciona todos los párrafos que están dentro de un elemento con el `id` 'contenedorPrincipal'.");
    const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
    console.log(parrafosContenedorPrincipal);

    console.log("7. Selecciona todos los elementos que tienen el atributo `data-atributo` con valor 'valor1'.");
    const elementosConAtributo = document.querySelectorAll('[data-atributo="valor1"]');
    console.log(elementosConAtributo);

    console.log('8. Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".');
    const segundoParrafoImportante = document.querySelectorAll(".parrafo.importante");
    segundoParrafoImportante.length>1 ? console.log(segundoParrafoImportante[1]) : null;

    console.log('9. Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".');
    const elementsContenedorSpan = document.querySelectorAll("#contenedorSecundario span");
    console.log(elementsContenedorSpan);

    console.log('10. Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".');
    const tercerParrafoPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
    const tercerParrafo= tercerParrafoPrincipal>2 ? console.log(tercerParrafoPrincipal[2]) : null;
});
