//Ejercicio 1
//` Deberás completar el código para que muestre cada número en la consola. En el caso de los números pares, deberá aparecer un mensaje que diga "El número X es par", siendo X el número correspondiente a imprimir por consola.

const loopDePares = () => {
    for (i = 0; i < 100; i++) {
        (i % 2 === 0) ? console.log(`El numero X es: ${i} par`) : console.log(`El numero es: ${i}`)

    }
}

loopDePares();


//Ejercicio 2
//` La siguiente Función, llamada "nuevoArreglo", recibe un número como parámetro y devuelve un nuevo Arreglo con la cantidad de elementos igual al número recibido. Los elementos del Arreglo estarán ordenados de forma ascendente, comenzando por el número 1.

//`Por ejemplo, nuevoArreglo(5) retorna: [1,2,3,4,5], mientras que nuevoArreglo(10) retorna [1,2,3,4,5,6,7,8,9,10].

function nuevoArreglo(number) {
    let newArray = [];

    for (let i = 0; i < number; i++) {
        newArray[i] = i + 1;
        //newArray.push(i);
    }

    return newArray //devuelve cant de elementos igual al param (numero)
}

console.log(nuevoArreglo(5))



//`La siguiente Función, llamada "oneProperty", recibe como parámetro un Arreglo de Objetos y un String.

//`Deberás completar el código para que retorne un nuevo Arreglo de Objetos, donde cada objeto tendrá como propiedad el String recibido como parámetro, y tendrá como valor, el valor correspondiente para esa propiedad en los objetos que se encuentran dentro del Arreglo recibido como párametro.


//`let arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]
//- oneProperty(arreglo, "edad") debe retornar [ { edad: 20 }, { edad: 22 } ]
//- oneProperty(arreglo, "name") debe retornar [ { name: "lucas"}, { name: "santi" } ]

let array = [{ name: "lucas", edad: 20 }, { name: "santi", edad: 22 }]
const oneProperty = (array, string) => {
    //[{}, {}], ""
    let arrayOfSpecificProp = array.map(element => {
        return { [string]: element[string] }
    });
    return arrayOfSpecificProp
}

console.log(oneProperty(array, "edad"))
console.log(array, 'NO FUE MODIFICADO')

console.log('--------------')
console.log('Otra forma de hacerlo')
//Otra forma de hacerlo
const oneProperty2 = (array, prop) => {
    let nuevoArr = []
    for (let i = 0; i < array.length; i++) {
        let obj = {}
        obj = { [prop]: array[i][prop] }
        nuevoArr.push(obj)
    }
    return nuevoArr
}
console.log(oneProperty2(array, "edad"))



//` La siguiente Función, llamada "summation", recibe como parámetro un número.

//- summation(3) debe retornar 6 porque suma (1 + 2 + 3)
//- summation(8) debe retornar 36 porque suma (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = (number) => {
    let sum = number
    for (let i = 0; i < number; i++) {
        sum += i
    }

    return sum
}

console.log(summation(3))



//` La siguiente Función, llamada "middleCharacter", recibe como parámetro un String.
//` Deberás completar el código para que retorne el o los caracteres del medio, según corresponda.

//- middleCharacter("plataforma5") debe retornar "f".
//- middleCharacter ("hola") debe retornar "ol".
//- middleCharacter ("cosas") debe retornar "s".

const middleCharacter = (string) => {
    let posicion
    let largo

    if (string.length % 2 == 1) {
        posicion = string.length / 2
        largo = 1
    } else {
        posicion = string.length / 2 - 1
        largo = 2
    }

    console.log(string, `; el substring del medio es: ${string.substring(posicion, posicion + largo)}`)
}

middleCharacter("Micael")

