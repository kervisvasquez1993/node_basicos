let deadpool = 
{
    nombre    : 'test',
    apellido  : 'winston',
    poder     : 'regeneracion',
    getNombre() {
        return `${this.nombre} y su apellido ${this.apellido}`
    }
}

const {nombre : primerNombre, apellido : segundoApellido, poder } = deadpool;

console.log(primerNombre)