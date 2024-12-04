// import { Empleado, EmpleadoClases, EmpleadoFreelanceClases, EmpleadoFrelance } from "./helpers/ejercicio3";

// console.log("---------Ejercicio 3---------");

// const empleado1 = new Empleado("Juan", 25, "junior");
// const empleado2 = new Empleado("Ana", 30, "semiSenior");
// empleado1.info();
// empleado2.info();

// const frelance1 = new EmpleadoFrelance("Pedro", 35, 50);
// const frelance2 = new EmpleadoFrelance("Maria", 40, 60);

// // frelance1.info();
// frelance2.info();


// //------ejercicio 3 con clases ---------
// const empleadoClase1 = new EmpleadoClases("Mario", 24, "junior");
// const empleadoClase2 = new EmpleadoClases("Ana Maria", 30, "semiJunior");
// empleadoClase1.info();
// empleadoClase2.info();
// const freelanceClase3 = new EmpleadoFreelanceClases("Rodolfo", 35, 50);
// const freelanceClase4 = new EmpleadoFreelanceClases("Maria Jose", 40, 60);


//--- Ejercicio 7 ------

import { GestionUsuariosClase, UsuarioClase } from "./helpers/ejercicio7";

function hadlerBuscarUsuario(event){
  event.preventDefault();
  alert("buscar usuario");
}


//ejecutar directamente
(async function (){

  function hadlerClickEliminar(event){
    if(event.target.classList.contains("btn-eliminar")){
      const indice = event.target.dataset.id;
      // eliminar el usuario que esta en la posicion del array[indice]
      gestorUser.usuarios.splice[indice, 1];
      divListaUsuarios.innerHTML= gestorUser
      .usuarios.map((user, index)=>{
        return `
          <li data-id="${index}">
          ${user.info()}
          <button class="btn-eliminar" data-id="${index}">Eliminar</button>
          </li>
          `
      }).join("");
    }
  }

  const gestorUser = new GestionUsuariosClase();
  await gestorUser.fetchUsuarios(); 

  // GestionUsuariosClase.cargarLocalStorage();

  const app = document.getElementById("app");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "Uso de POO con JsonPlaceHolder";
  app.appendChild(h1Element);
  const divListaUsuarios = document.createElement("div");
  divListaUsuarios.id= "lista-usuarios";
  app.appendChild(divListaUsuarios);

  const divBuscarUsuarios = document.createElement("div");
  divBuscarUsuarios.id= "buscar-usuarios";
  divBuscarUsuarios.innerHTML =`
    <form id="form-usuarios">
      <input id="nombre-buscar" type="text" placeholder="Nombre a buscar"></input>
      <button type='submit' id="buscar" class="btn-buscar">Buscar</button>
    </form>
    `;

    divListaUsuarios.innerHTML= gestorUser
      .usuarios.map((user, index)=>{
        return `
          <li data-id="${index}">
          ${user.info()}
          <button class="btn-eliminar" data-id="${index}">Eliminar</button>
          </li>
          `
      }).join("");
    app.appendChild(divBuscarUsuarios);


    document.getElementById("lista-usuarios")
            .addEventListener("click", hadlerClickEliminar);

    document.querySelector("#form-usuario")
            .addEventListener("submit", hadlerBuscarUsuario)
})()

//ejecutar normal
// async function init(){
//   const gestorUser = new GestionUsuariosClase();
// await gestorUser.fetchUsuarios()
// }
// init();


// Renderizar en el dom un formulario que permita a traves de un input y el boton de buscar, buscar por nombre
// los usuarios de mi clase GestionUsuariosClase. Ademas pintaremos en un div llamado lista-usuarios a traves de li
// pintaremos la data de todos los usuarios (nombre, email, rol) menos el id junto con el boton de borrar con el icono
// de una papelera de reciclaje


