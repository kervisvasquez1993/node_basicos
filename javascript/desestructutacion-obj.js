const sayayin = {
    nombre : 'goku',
    nombreSayayin : 'kakarota',
    clase : 'baja',
    edad : 50,
    getNombre() {
        return `${this.nombre} es un ${this.nombreSayayin} su clase es ${this.clase}`
    } 
}
/* 
console.log(sayayin.getNombre()) */

/* const nombre = sayayin.nombre
const nombreSayayin = sayayin.nombreSayayin
const clase = sayayin.clase */

const  {nombre, nombreSayayin, clase, edad = 0} = sayayin

/* console.log(nombre, edad) */


/* function imprimeSayayin(guerreroz) 
{
    const {nombre, nombreSayayin, clase, edad = 0} = guerreroz
    console.log(nombre, clase,edad)

} */

function imprimeSayayin({nombre, nombreSayayin, clase, edad = 0}) 
{
    nombre = "kervis"
    console.log(nombre, clase,edad, nombreSayayin)

}


/* imprimeSayayin(sayayin) */

const herores = ['goku', 'vegeta', 'gohan'];


/* const [h1,h2,h3] = herores */

const [,,h3] = herores

console.log(h1,h2,h3)