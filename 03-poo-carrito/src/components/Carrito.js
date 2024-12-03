import { Producto } from "./Producto";

export default class Carrito{
    constructor(){
        // creamos un arrays de productos
        this.productos = [];
    } 
    agregarProductos(nombre, cantidad, precio){
            this.productos.push(new Producto(nombre,cantidad,precio));
            //lo guardamos tambien en el LOCALSTORAGE
            this.guardarLocalStorage();
        }

    /**
     * 
     * @param {Number} index 
     * @return <void>
     */
    borrarProducto(index){
        this.productos.splice(index,1);
        //lo actualizamos tambien en el LOCALSTORAGE
        this.guardarLocalStorage();
    }

    editarProducto(index,newCantidad){
        if(newCantidad>0){
           this.productos[index].cantidad=newCantidad; 
           //Actualizar el LOCALSTORAGES
           this.guardarLocalStorage();
        }
    }
    calcularTotalCarrito(){
        return this.productos.reduce((total,producto) => total + producto.calcularTotal(), 0)
    }

    guardarLocalStorage(){
        //setItem(clave,valor) ---> Para guardar hay que stringi
        localStorage.setItem("carrito",JSON.stringify(this.productos))
    }

    cargarLocalStorage(){
        //getItem

        const datosCarrito = JSON.parse(localStorage.getItem("carrito"));

        if(datosCarrito){
            this.productos = datosCarrito.map(
                (producto)=> 
                    new Producto(producto.nombre,producto.cantidad,producto.precio));
        };

        // localStorage.hasOwnProperty("carrito")
        // ? localStorage.getItem
        // : null ;
    }
}