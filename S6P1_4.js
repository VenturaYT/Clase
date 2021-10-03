/*let carro = {
    color:'rojo',
    modelo:'Civic Type R 2021',
    marca: 'Honda',
    puertas: 4,
    llantas: 4,
    cilindros: 8
}

console.log(carro.modelo);*/

let persona = {
    nombre: 'Victor Ivan',
    apellido: 'Juarez Ventura',
    peso: 70,
    altura: 1.65,

}

//console.log(persona);

function definirPersona(p) {
    console.log(persona.nombre + ' ' + persona.apellido + ' tiene una altura de:' + persona.altura + ' y pesa ' + persona.peso);
}

definirPersona(persona);