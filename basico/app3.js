console.log('inicio de programa');

setTimeout(() => {
    console.log('Primer timeout');
},3000)


setTimeout(() => {
    console.log('Segundo timeout');
},0)

setTimeout(() => {
    console.log('Tercer timeout');
},0)

console.log('fin de programa');

/* flujo */
//inicio de programa
//fin de programa
//segundo timeout
// tercero timeout
// Primer timeout