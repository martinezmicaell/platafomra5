// 1. Loop de pares

// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop.
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

const loopDePares = (number) => {
    for (let i = 0; i < 100; i++) {
        console.log(i)
        if ((i + number) % 2 === 0) console.log(`El número ${i} es par`)
    }
}

loopDePares(10)




//2. Loop de impares con palabra

//Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop.
//Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

const loopDeImpares = (number, word) => {
    for (let i = 0; i < 100; i++) {
        console.log(i)
        if ((i + number) % 2 === 1) console.log(word)
    }
}

loopDeImpares(10, 'Espada')


//3. Sumatoria

//Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

//Ejemplo:
//sumattion(3) debe retornar 6 porque hace (1 +2 +3)
//sumattion(8) debe retornar 36

const sumattion = (number) => {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum
}

console.log(sumattion(2))



//4. Callback
//Debes crear una función llamada callback que reciba como Parámetros un número y una función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

//Teoría de callbacks: click aqui

//Ejemplo:
//callback(5, (num)=>{return num*10}) debe retornar 50
//callback(25, (num)=>{return num/5}) debe retornar 5

const callback = (number, fn) => {

    return fn(number)
}

console.log(callback(5, (num) => num * 10))
console.log(callback(3, (num) => num * 10))




//5. Nuevo Arreglo

// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]


const nuevoArreglo = (number) => {
    let array = [];
    for (let i = 1; i <= number; i++) {
        array.push(i)
    }

    return array
}

console.log(nuevoArreglo(5))


// 6. Similar String.split()

// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original. Si no sabés cómo funciona, Google puede ayudarte.

// Importante: No podés usar el String.split()

// Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = (string) => {
    return [...string]
}

console.log(split('hello'))


// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo:
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”


const middleCharacter = (string) => {
    let inicio;
    let avance;

    if (string.length % 2 === 1) {
        inicio = Math.floor(string.length / 2)
        avance = 1;
        return string.substring(inicio, inicio + avance)
    } else {
        inicio = Math.floor(string.length / 2) - 1
        avance = 2
        return string.substring(inicio, inicio + avance)
    }
}

console.log(middleCharacter('micaela'))
console.log(middleCharacter('micael'))
console.log(middleCharacter('agostina'))


// 8. Mover ceros a lo último

// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

const moveZeros = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            elementIndex = arr.indexOf(arr[i]);
            const zero = arr.splice(elementIndex, 1)

            arr.push(...zero)

            // arr.splice(elementIndex, arr.length - 1, element);
        }
    }
    return arr

}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))


// 9. Manejar dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

// Ejemplo:

// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
// 		Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

const arrayHandler = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`)
    }
}
arrayHandler([1, 2, 3, 4], ['h', 'o', 'l', 'a'])


// 10. Mezclar arreglos
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo:
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

const mezclarArreglos = (arr1, arr2) => {
    if (arr1.length < arr2.length) {
        let arr1Temp = [...arr1]
        arr1 = [...arr2]
        arr2 = arr1Temp
    }
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === undefined) continue
        newArray.push(arr1[i])

        for (let j = i; j <= i; j++) {

            if (arr2[j] === undefined) {
                continue
            }
            newArray.push(arr2[j])
        }
    }

    return newArray


}


console.log(mezclarArreglos([1, 2, 3, 4], ['h', 'o', 'l', 'a']))

console.log(mezclarArreglos([1, 2, 3, 4], ['h', 'p']))

console.log(mezclarArreglos(['h', 'p'], [1, 2, 3, 4]))


// 11. Arreglos

// Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5:
// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
// 2. “pop([1,2,3,4,5])” debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

//JOIN
const join = (array, space) => {
    let stringOfArray = array.toString();
    let result = '';
    for (let i = 0; i < stringOfArray.length; i++) {
        if (stringOfArray[i] === ',') {
            result += space
        } else {
            result += stringOfArray[i]

        }
    }
    return result
}

console.log(join([1, 3, 5], '/'))


//POP
const pop = (array) => {
    const deleted = array[array.length - 1]
    if (array.length !== 0) {
        array.splice(array.length - 1, 1)
    }
    console.log(array)
    return deleted
}

pop([5, 10, 23, 62]);



//FILTER
const filter = (arr, filterFunc) => {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = filterFunc(arr[i]);
        // push the current element if result is true
        if (result) filterArr.push(arr[i]);
    }
    return filterArr;
}

const oddArr2 = filter([1, 2, 3, 4, 5], (num) => num % 2 === 0)
console.log(oddArr2)



//MAP
const map = (arr, mapFunc) => {
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i])
        mapArr.push(result)
    }
    return mapArr
}

map([1, 2, 3, 4, 5], (e) => e * 10)



// 12. Mínima Suma

// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

// Ejemplo:
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

const minSum = (arr) => {
    //Si el resultado es negativo, a se ordena antes que b.
    //Si el resultado es positivo, b se ordena antes de a.
    //Si el resultado es 0, nada cambia.
    const arrOrdenado = arr.sort((a, b) => a - b)
    const sum = arrOrdenado[0] + arrOrdenado[1]
    return sum
}

minSum([7, 6, 5, 4, 3, 2, 1])

minSum([1, 10, 43, 900, 20, 8])



// 13. Arreglo de objetos

// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

const arregloDeObjetos = (number) => {
    const arr = []

    for (let i = 1; i <= number; i++) {
        const obj = {
            valor: i
        }

        arr.push(obj)
    }
    return arr
}

arregloDeObjetos(5)
console.log(arregloDeObjetos(5))
console.log(arregloDeObjetos(3))



// 14. Arreglo de objetos

// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
// arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

const arrayOfObjects = (number, word) => {
    const arr = []
    for (let i = 1; i <= number; i++) {
        const obj = {
            [word]: i
        }

        arr.push(obj)
    }

    return arr
}

arrayOfObjects(5, 'hola')
arrayOfObjects(3, 'chau')




// 15. Única propiedad

// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro.

// Ejemplo:
//  var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]


const oneProperty = (array, prop) => {
    const arr = []

    for (let i = 0; i < array.length; i++) {
        for (const [key, value] of Object.entries(array[i])) {
            console.log(key)
            if (prop === key) {
                let obj = {};
                obj = {
                    [key]: value
                }
                arr.push(obj)
            }


        }
    }
    return arr
}

const listOfObjects = [
    { name: 'lucas', edad: 20 },
    { name: 'santi', edad: 22 }
]
oneProperty(listOfObjects, 'name')
console.log(oneProperty(listOfObjects, 'edad'))


// 16. Guerra de palabras

//  	Utils:
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”

const warWords = (word1, word2) => {
    let abc = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }
    let sumWord1 = 0;
    let sumWord2 = 0

    if (word2.length > word1.length) {
        let wordTemp = word1
        word1 = word2
        word2 = wordTemp
    }

    for (let i = 0; i < word1.length; i++) {

        const letter1 = word1[i];
        for (j = i; j <= i; j++) {
            const letter2 = word2[i]

            for (const [key, value] of Object.entries(abc)) {
                if (letter1 === key) {
                    sumWord1 += value
                }

                if (letter2 === key) {
                    sumWord2 += value
                }
            }
        }
    }
    if (sumWord1 > sumWord2) {
        return word1
    } else if (sumWord2 > sumWord1) {
        return word2
    } else {
        return 'Empate'
    }
}

console.log(warWords('hola', 'chau'))
warWords('love', 'friendship')





// 17. Prefijos Telefónicos

// 	Utils:
// 	var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo :

// {
// 	54: “Argentina”,
// 	55: ”Brasil”,
// 	56: ”Ecuador”,
// 	57: ”Colombia”
// }


// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

// Ejemplo:
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”



const validarPrefijo = (numberPhone) => {
    let prefijos = [54, 55, 56, 57, 58]
    let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela"]
    const numberToString = numberPhone.toString()
    const twoDigits = numberToString.substring(0, 2)
    let objPrefix = {}
    //Creando objeto con los 2 arreglos dados como utils
    for (let i = 0; i < prefijos.length; i++) {
        for (let j = i; j <= i; j++) {
            objPrefix = {
                ...objPrefix,
                [prefijos[i]]: paises[j],
            }
        }
    }

    console.log(objPrefix)
    //Verificando si el prefijo del numero del argumento coincide con alguno de los del objeto
    for (const [key, value] of Object.entries(objPrefix)) {
        if (twoDigits === key) {
            return `Este número pertenece a ${value}`
        }
    }

    return `El número no pertenece a nuestros países`

}

validarPrefijo(542984734813)
validarPrefijo("5712345678")
validarPrefijo("8012345678")




// 18. {value: key} kelue: vay

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

// 	Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys('hola’) debería devolver “error, input can’t be a string”

const reverseKeys = (argument) => {
    dataTypeArgument = typeof argument
    let obj = {}

    if (Array.isArray(argument)) {
        return `error, input can’t be an Array`
    } else if (dataTypeArgument !== 'object') {
        return `error, input can’t be a ${dataTypeArgument}`
    }


    for (const [key, value] of Object.entries(argument)) {

        if (typeof value === 'string') {
            obj = {
                ...obj,
                [value]: key
            }
        } else {
            obj = {
                ...obj,
                [key]: value
            }
        }
    }
    return obj
}


reverseKeys(344) //!ERROR CON ESTE
reverseKeys('hola')
reverseKeys([]) //!ERROR CON ESTE

var prueba = {
    nombre: 'santi',
    edad: 22,
    nacionalidad: 'de otro planeta',
    documento: 44444444
}
reverseKeys(prueba)



// 19. Palíndromo

// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

// Definición de palíndromo aquí.

// Ejemplo:

// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

const palindromo = (string) => {
    string = string.toLowerCase();
    let stringReverse = string.split('').reverse()
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== stringReverse[i]) {
            console.log(string[i])
            return false
        }
    }
    return true
}

palindromo('Anilina')
palindromo('Ana')
palindromo('Enrique')


// 20. Rotación de arreglo a la derecha

// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

// Ejemplo:
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]


const rotar = (arr, steps) => {
    if (steps > arr.length) {
        steps = steps % arr.length;
    } else if ((steps == arr.length) || (steps == 0)) {
        return arr.slice();
    }

    return [...arr.slice(-steps), ...arr.slice(0, -steps)];
}

rotar([1, 2, 3, 4, 5], 2)
rotar([1, 2, 3, 4, 5], 3)



// 21. Consecutivos similares

// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string.
// Ejemplo:
// consecutivosSimilares(“AAAA”) debe retornar 3
// consecutivosSimilares(“BBBBB”) debe retornar 4
// consecutivosSimilares(“ABABABAB”) debe retornar 0
// consecutivosSimilares(“BABABA”) debe retornar 0
// consecutivosSimilares(“AAABBB”) debe retornar 4
