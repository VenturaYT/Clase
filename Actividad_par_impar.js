var preguntas = ["Ingresa el valor de Minimo: ", "Ingresa el valor de Maximo: "];
var datos = [];

function pregunta(i) { //Hace el recorrido del array
    process.stdout.write(preguntas[i]); //La pregunta que muestra la consola
}

process.stdin.on("data", function(data) { // Ingresa los datos del usuario
    datos.push(data.toString().trim()) // Almacena los datos del usuario en el Array

    if (datos.length < preguntas.length) { // Chequeo de las preguntas
        pregunta(datos.length);
    } else {
        var A = datos[0]
        var B = datos[1]

        if (Number.isInteger(+A)) { // Compara que A sea numero entero
            if (Number.isInteger(+B)) { // Compara que B sea entero

                for (A; A <= B; A++) { // Inicio del Bucle de A hasta B 
                    if (A % 2 == 0) { // Checa si es par o impar (por residuo)
                        console.log("El numero " + A + " es par")
                    } else {
                        console.log("El numero " + A + " es impar")
                    }
                }
                process.exit();

            } else {
                console.log("Un numero no es entero") // Si el numero B contiene decimales
                process.exit();
            }
        } else {
            console.log("Un numero no es entero") // Si el numero A contiene decimales
            process.exit();
        }

    }
})

pregunta(0) // Hace que el programa corra se inicia en 0 por el Array