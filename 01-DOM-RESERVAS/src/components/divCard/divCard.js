    //Crear un div
    const divCard= document.createElement("div");
    divCard.id= 'card';
    divCard.classList.add("principal card");
    
    const parrafo = document.createElement("p");
    parrafo.textContent("Soy un parrafo");
    divCard.appendChild(p);

    const btnmensaje = document.createElement("button");
    btnmensaje.textContent="Mostrar mensaje";
    divCard.appendChild(btnmensaje);