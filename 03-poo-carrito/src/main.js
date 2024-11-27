import Carrito from "./components/Carrito";

const carrito = new Carrito();
//cargamos los datos del localStorage al carrito
carrito.cargarLocalStorage();

// selecciono el APP...
function pintarInterfazWeb(){

  const app = document.getElementById("app");

  function pintarCarrito(){

    const lista= document.getElementById("lista-producto");

    lista.innerHTML= carrito.productos
      .map((producto,index)=>`
      <li data-id="${index}">${producto.obtenerInfo()}
      <button class="btn-editar" data-id="${index}">Editar</button>
      <button class="btn-borrar" data-id="${index}">Borrar</button>
      </li>
      `).join("")
      //Calcular el total
      
  }
  const hadlerSubmit = (event) =>{
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.querySelector("#cantidad-producto").value);
    const precio = Number(document.querySelector("#precio-producto").value);
    // Validaciones del formulario basicas
    if(!nombre || cantidad<0 ||precio<0){
      alert("Debes de insertar valores correctos");
    }
    // Añadimos el nombre, cantidad y precio a un producto del carrito
    carrito.agregarProductos(nombre,cantidad,precio);
    // ahora pintamos el carrito
    pintarCarrito();
  };

    const opcionesProducto = (event) =>{
      // target es el COMPONENTE donde he hecho CLICK o lo que sea
      const indice =Number( event.target.dataset.id);//cuando pulso click obtengo el componente
      if(event.target.classList.contains("btn-borrar")) {
        carrito.borrarProducto(indice);
        pintarCarrito();
      }

      if (event.target.classList.contains("btn-editar")) {

      }
    }


  app.innerHTML = `
    <h1> Carrito de   la Compra de productos </h1>
    <form id="form-productos">
      <input id="nombre-producto" type="text" placeholder="Nombre del producto">
      <input id="cantidad-producto" type="number" placeholder="Cantidad">
      <input id="precio-producto" type="number" placeholder="Precio">
      <button type="submit">Agregar Producto</button>
    </form>

   <div id="lista-productos"> </div>`

   document.getElementById("form-producto")
           .addEventListener("submit", hadlerSubmit);

  document.getElementById("lista-productos")
          .addEventListener("click", opcionesProducto)
    
}

pintarInterfazWeb();