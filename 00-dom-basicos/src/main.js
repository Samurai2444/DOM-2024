
//-----------------Declaracion de funciones -----------------
const handlerClickSpan = (event) =>{
    const span =(event.target);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        //cambio el estilo inline de color
        span.style.backgroundColor= `#${randomColor}`;
}
const handlerDoubleClickParrafo = (event) =>{
    const parrafo = event.target;
    alert(parrafo.textContent);
}
//-------------------Inicio del programa--------------------

//("2º Relación");

document.addEventListener("DOMContentLoaded", () =>{
   //("1. Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.");
    // document.querySelectorAll("#contenedorSecundario span")
    // .forEach(span => {
    //     //tengo que asignar un evento al click de ese span
    //     span.addEventListener("click", handlerClickSpan);

    // })


    //(2.Crea una función que muestre una alerta con el contenido
    // de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.)
    // document.querySelectorAll(".parrafo")
    // .forEach((parrafo) =>{
    //     parrafo.addEventListener("dblclick", handlerDoubleClickParrafo);
    // })
        
    //4. Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` 
    //cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
    // document.addEventListener("keydown", () =>{
    //     //¿como pudeo saber que elemento ha lanzado el evento keyDown?
    //     if(event.key ==="Enter"){
    //         document.querySelectorAll("#contenedorSecundario p")
    //         .forEach((parrafo) =>{
    //             parrafo.textContent="Has pulsado Enter";
    //             //parrafo.innerText = "Has pulsado Enter2";
                
    //             //parrafo.innerHTML="<strong>Has pulsado Enter</strong>";
    //             //PELIGROSO
    //         });
    //     }
    // });

    //5. Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
    // document.querySelectorAll(".etiqueta")
    // .forEach((etiqueta)=>{
    //     etiqueta.addEventListener("click", ()=>{
    //         etiqueta.remove();
    //     });
    // });

    //6. Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` 
    //cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
    // document.querySelectorAll("#contenedorSecundario span")
    // .forEach((span) =>{
    //     span.addEventListener("mouseover", ()=>{
    //         span.style.color="blue";
    //     });
    //     span.addEventListener("mouseout", ()=>{
    //         span.style.color="";
    //     });
    // });

    //8. Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal`
    // cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
    // document
    // .querySelector("#contenedorPrincipal img")
    // .addEventListener("click", ()=>{
    //     document.querySelectorAll("#contenedorPrincipal p")
    //     .forEach((parrafo)=>{
    //         const currentSize = window.getComputedStyle(parrafo).fontSize;
    //         console.log(typeof currentSize);
    //         parrafo.style.fontSize= `${parseInt(currentSize) *2}px`;
    //     })
    // })

    //9. Añade un evento de teclado a la página. Cuando se presione cualquier tecla,
    // muestra una alerta con el código de la tecla presionada.
    document.addEventListener("keydown", ()=>{
        if(event.key){
        alert(event.key);
        }
    })


});

