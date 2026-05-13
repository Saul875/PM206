
console.log("Hola Mundo JS desde el servidor")

let edad1 = 20;
const edad2 = 30;

console.log("edad promedio")
console.log((edad1 + edad2) / 2)

console.time('miproceso')

    for(let i = 0; i < 100000; i++){
        
    }

console.timeEnd('miproceso')

/*Objetos tipo tabla */
let usuarios= [
    {nombre: "Saul", edad: 24},
    {nombre: "Vicko", edad: 22}
]

console.table(usuarios)
