// //1.- Crear una clase para modelar un sistema de usuarios para que puedan iniciar y cerrar sesion y actualizar su perfil
// //---------------SOLUCION CON FUNCIONES CONSTRUCTORAS---------
// function Usuarios(nombre, email, password){
//   this.nombre=nombre; //Variables de instancias públicas
//   this.email=email;
//   let _password=password; //Variable de instancia privada
//   //--- Metodos publicos
//   this.login = function(email, password) { //No usar arrow function a no ser que dominemos el contexto del this
//     //Quiero evaluar si email y password son correctos
//     if(this.email === email && _password === password){
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   };

import { Producto } from "./components/Producto";

//   this.updateEmail = function(newEmail){
//     this.email= newEmail;
//     return `Email actualizado a ${this.email}`;
//   };
// }

// //Crear un usuario
// const usuario1 = new Usuarios("Juan", "juan@gmail.com","123456");

// // ------------- Lo mostramos en el DOM --------
// const app = document.getElementById("app");

// function renderUsuarios () {
//   // Funcion que pinta en el app el usuario
//   app.innerHTML = `
//     <h2>Usuario: ${usuario1.nombre}</h1>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnLogin">Iniciar sesión</button> 
//     `;
//   // añadir el evento al boton
//   const btnLogin = document.getElementById("btnLogin");
//   btnLogin.addEventListener("click", () =>{
//     alert(usuario1.login("pepe@gmail.com", "123456"));
//   })
// }


// // -----SOLUCION CON CLASES -------
// class UsuarioClases{
//   //Las variables privadas anteponiendo # al nombre
//   #password;

//   constructor(nombre,email,password){
//     this.nombre=nombre; //Variables de instancias públicas
//     this.email=email;
//     this.#password=password;
//   }

//   login = function(email, password) { //No usar arrow function a no ser que dominemos el contexto del this
//     //Quiero evaluar si email y password son correctos
//     if(this.email === email && _password === password){
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   }

//   updateEmail = function(newEmail){
//     this.email= newEmail;
//     return `Email actualizado a ${this.email}`;
//   }
// }

// const usuario2 = new UsuarioClases("Pepe", "pepe@gmail.com", "123456");

// Implimentar un modelo de producto con funciones constructoras y clases que permita obtener informacion del producto,
// actualizar el stock, debiendo registrar nombre, precio y stock


// ------------------- PRODUCTO -----------------------

//Array de productos
const productos = [
  new Producto("Portatil", 500, 10),
  new Producto("Movil", 1200,20),
  new Producto("Tablet", 300, 5),
]

//renderizamos los productos
const app = document.getElementById("app"); 
//  ${productos
//     .map((producto) =>(`<li> ${producto.obtenerInfo()} </li>`))
//     .join("")
//   }  
// () <== return implicito 
app.innerHTML = `
  <h2>Gestion de productos</h2>

  ${productos
    .map((producto, index) =>{
    return `<li> ${producto.obtenerInfo()}
    <button class="btn-actualizar-stock" data-index="${index}">Actualizar Stock</button> </li>`
    })
    .join("")
  }
  `;

  //escuchamos el evento click en los botones de actualizar stock

  document.querySelectorAll(".btn-actualizar-stock")
  .forEach((btn) => {
    btn.addEventListener("click", () =>{
      alert("Actualizar stock");
    })
  })