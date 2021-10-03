/*let frutas = ['uva','melón','pera'];

for(let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}*/

let personas = ['Pedro', 'Susana', 'Omar', 'Megan', 'Victor'];
let sueldo = [2000, 10000, 50000, 3000, 400];

for (let i = 0; i < personas.length; i++) {
    array3 = personas[i].concat(" es de " + sueldo[i]);
    console.log("El sueldo de " + array3);
}