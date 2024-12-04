//--------------Funciones constructoras--------------
export function Empleado(nombre,edad,puesto){
    this.nombre=nombre;
    this.edad=edad;
    this.puesto=puesto;
}
 //metodo compartido
 Empleado.prototype.calcularSalario = function(){
    const salarioBase = {
        "junior": 1500,
        "semiSenior": 2000,
        "senior": 2000
    }

    return salarioBase[this.puesto];
}

Empleado.prototype.info = function(){
    console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Salario: ${this.calcularSalario()}
        `); 
}

//clase hija de empleado
/**
 * 
 * @param {String} nombre 
 * @param {Number} edad 
 * @param {Number} precioHora 
 */
export function EmpleadoFrelance(nombre,edad,precioHora){
    Empleado.call(this,nombre,edad, "frelance");
    this.precioHora=precioHora;
    //metodo prototipo de la clase padre
    EmpleadoFrelance.prototype=Object.create(Empleado.prototype);
    EmpleadoFrelance.prototype.constructor=EmpleadoFrelance;
}

EmpleadoFrelance.prototype.info = function(horasTrabajadas){
    console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Precio por hora: ${this.precioHora}
        Salario: ${this.calcularSalario(horasTrabajadas)}
        `); 
    }

EmpleadoFrelance.prototype.calcularSalario= function(horasTrabajadas){
    return this.precioHora * horasTrabajadas;
}

export class EmpleadoClases {
    constructor(nombre, edad, puesto){
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    calcularSalario(){
        const salarioBase = {
            "junior": 1500,
            "semiSenior": 2000,
            "senior": 2000
        }

        return salarioBase[this.puesto];
    }

    info(){
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Puesto: ${this.puesto}
            Salario: ${this.calcularSalario()}
            `); 
    }
}

export class EmpleadoFreelanceClases extends EmpleadoClases{
    constructor(nombre, edad, precioHora) {
        super(nombre, edad, "freelance");
        this.precioHora = precioHora;
    }

    calcularSalario(){
        return this.precioHora * horasTrabajadas;
    }
}