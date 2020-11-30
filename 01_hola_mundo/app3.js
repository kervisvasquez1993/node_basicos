console.log('inicio del programa');

setTimeout(() => {
    console.log('primer TimeOut')
},3000)

setTimeout(() => {
    console.log('segundo TimeOut')
},0)

setTimeout(() => {
    console.log('tercero TimeOut')
},0)
console.log('fin del programa');