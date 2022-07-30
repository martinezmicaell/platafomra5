//$ CallBacks
// En este caso, se trata de «programar» un suceso que ocurrirá en un momento conocido del futuro, pero muchas veces desconoceremos cuando se producirá (o incluso si se llegará a producir).

//$ Al llamar a los callbacks, como parametro le voy a pasar los argumentos, pero no se cuantos argumentos le voy a pasar, y puede ser que le pase X valor pero dentro de la funcion que toma el callback ese value lo puedo asignar como null si hay error, hacer un condicional y asignarle null dentro del callback
//Pasa en doTask

//- Si lo prefieres y lo ves más claro (no suele ser habitual en código Javascript, pero cuando se empieza suele resultar más fácil entenderlo) podemos guardar el callback en una constante:

// const action = () => console.log("He ejecutado la función");
// setTimeout(action, 2000);



//ejercicio con dados
/* Implementación con callbacks */
const doTask = (iterations, callback) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            /* Error, se ha sacado un 6 */
            //Si no añado nada al primer parametro (paso solo callback con el objeto, en vez de objeto ser el parametro result, va a ser el parametro err (el primero)), quiere decir que el objeto va a ser el error y se va a tratar como error en el callback if(err) es el objeto que devuelve como err (err.message)
            return callback({
                error: true,
                message: "Se ha sacado un 6"
            });
        }
    }
    /* Termina bucle y no se ha sacado 6 */
    return callback(null, {
        error: false,
        value: numbers
    });
}

//Llamando a doTask con el callback, result es un objeto:
doTask(10, function (err, result) {
    if (err) {
        console.error("Tuviste un error: ", err.message);
        return;
    }
    console.log("Tiradas correctas: ", result.value);
});



const hello = (number, word) => {
    return {
        number,
        word
    }
}

console.log(hello('micael')) // number: micael, word: undefined