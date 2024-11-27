/*Ejercicio de examen
Gestion dinamica de un carrito de la compra mediante funciones contructoras y POO 
Objeticos:
-Agregar produtos al carrito guardando nombnre cantidad y precio
-Editar productos permitiendo cambiar la cantidad
-Eliminar productos del carrito
-Actualizar el total a pagar dinamicamente*/

export class Producto {
    // propiedades -- privadas/publicas
    #precio;
    // constructor
    constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.#precio=precio;
    }
    // métodos
    getPrecio() {
        return this.#precio;
    }
    setPrecio(newPrecio){
        this.#precio= newPrecio;
    }
    calcularTotal(){
        return this.#precio*this.cantidad;
    }
    obtenerInfo(){
        return `Nombre: ${this.nombre}, Precio: ${this.#precio}, Cantidad: ${this.cantidad}, Total: ${this.calcularTotal()}`
    }
  }
