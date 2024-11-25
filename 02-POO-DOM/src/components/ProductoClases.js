export class ProductoClases{
    #nombre;
    #precio;
    #stock;
    constructor(nombre,precio,stock){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }
    // ---- Metodos publicos
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setPrecio(precio){
        this.#precio=precio;
    }
    getPrecio(){
        return this.#precio;
    }
    setStock(stock){
        this.#stock=stock;
    }
    getStock(){
        return this.#stock;
    }
    actualizarStock = function (cantidad) {
        this.#stock += cantidad;
        return `Stock actualizado a ${this.getStock()}`;
    }
    obtenerInfo = function () {
        return `Nombre: ${this.getNombre()}, Precio: ${this.getPrecio()}, Stock: ${this.getStock()}`
    }
}