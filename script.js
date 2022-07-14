// pre-entrega 1
// funcionalidad inicial para un simulador, no necesariamente un código para la entrega final.
// Mi idea para la entrega final es hacer un e-commerce

// pre entrega compuesto por: html, variables js, funciones, objetos, arrays, metodo de busqueda y filtrado sobre el array.
// centro pokemon privatizado, calculadora de costo del servicio de curación
// pienso en añadir al centro pokemon privatizado un simulador al final que ingrese los pokemon del usuario en un objeto llamado "hospital" o "sala de curacion" que esté lleno de otros pokemones(generados internamente) y que luego, para poder retirar a los pokemon del usuario una vez recuperados tenga que pedir el número (o una id de paciente) de cada pokemon, y si coloca otro número le saltaría un error que diría algo así como: "un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon!" básicamente sería un juego de memoria (acordarse del id asignado a cada pokemon)

// a lo mejor podría añadir un random entre 0-99 que sería la id del pokemon paciente y que se entregue la id luego de ingresar los datos de cada pokemon, el usuario tendría que recordar el id de cada pokemon para después de sanado, pueda retirarlo. el id estaría dentro del array de objetos.



alert("Se privatizó el centro pokemon, ahora curar a tus pokemón tiene un costo! (10 dolares por pokemon, 2 dolares por HP recuperado)") // Actualmente el valor está a 2 dólares el HP, más un costo base de 10 dólares por pokemón.
let repetir = true
while(repetir) { // ciclo para ingresar un número válido de pokemon
    numero = parseFloat(prompt("Ingrese cuántos pokemones tienes"))
    if (numero > 6 || numero < 1 || isNaN(numero)) {
        alert("Número invalido! recuerda que debieras portar entre 1 a 6 pokemones.")
    } else {
        break
    }
}

//variables vacias creadas
let hp1, hp2, hp3, hp4, hp5, hp6
let nombre1, nombre2, nombre3, nombre4, nombre5, nombre6
let nivel1, nivel2, nivel3, nivel4, nivel5, nivel6
let posicion1, posicion2, posicion3, posicion4, posicion5, posicion6
let id1, id2, id3, id4, id5, id6
let idABuscar1, idABuscar2, idABuscar3, idABuscar4, idABuscar5, idABuscar6

//switch para ingresar los datos de cada pokemon
switch(numero) {
    case 1:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON(tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente a cada uno, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        break
    case 2:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        nombre2 = prompt("Ingrese cual es tu segundo POKEMON")
        nivel2 = prompt("ingrese el NIVEL del pokemon")
        posicion2 = 2
        id2 = Math.floor(Math.random() * 99)
        while(id1 === id2) { 
            id2 = Math.floor(Math.random() * 99)
        }
        break
    case 3:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente a cada uno, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        nombre2 = prompt("Ingrese cual es tu segundo POKEMON")
        nivel2 = prompt("ingrese el NIVEL del pokemon")
        posicion2 = 2
        id2 = Math.floor(Math.random() * 99)
        while(id2 === id1) { 
            id2 = Math.floor(Math.random() * 99)
        }
        nombre3 = prompt("Ingrese cual es tu tercer POKEMON")
        nivel3 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 3
        id3 = Math.floor(Math.random() * 99)
        while(id3 === id2 || id3 === id1){ 
            id3 = Math.floor(Math.random() * 99)
        }
        break
    case 4:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente a cada uno, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        nombre2 = prompt("Ingrese cual es tu segundo POKEMON")
        nivel2 = prompt("ingrese el NIVEL del pokemon")
        posicion2 = 2
        id2 = Math.floor(Math.random() * 99)
        while(id2 === id1) { 
            id2 = Math.floor(Math.random() * 99)
        }
        nombre3 = prompt("Ingrese cual es tu tercer POKEMON")
        nivel3 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 3
        id3 = Math.floor(Math.random() * 99)
        while(id3 === id2 || id3 === id1){ 
            id3 = Math.floor(Math.random() * 99)
        }
        nombre4 = prompt("Ingrese cual es tu cuarto POKEMON")
        nivel4 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 4
        id4 = Math.floor(Math.random() * 99)
        while(id4 === id3 || id4 === id2 || id4 === id1 ){
            id4 = Math.floor(Math.random() * 99)
        }
        break
    case 5:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente a cada uno, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        nombre2 = prompt("Ingrese cual es tu segundo POKEMON")
        nivel2 = prompt("ingrese el NIVEL del pokemon")
        posicion2 = 2
        id2 = Math.floor(Math.random() * 99)
        while(id2 === id1) { 
            id2 = Math.floor(Math.random() * 99)
        }
        nombre3 = prompt("Ingrese cual es tu tercer POKEMON")
        nivel3 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 3
        id3 = Math.floor(Math.random() * 99)
        while(id3 === id2 || id3 === id1){ 
            id3 = Math.floor(Math.random() * 99)
        }
        nombre4 = prompt("Ingrese cual es tu cuarto POKEMON")
        nivel4 = prompt("ingrese el NIVEL del pokemon")
        posicion4 = 4
        id4 = Math.floor(Math.random() * 99)
        while(id4 === id3 || id4 === id2 || id4 === id1 ){
            id4 = Math.floor(Math.random() * 99)
        }
        nombre5 = prompt("Ingrese cual es tu quinto POKEMON")
        nivel5 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 5
        id5 = Math.floor(Math.random() * 99)
        while(id5 === id4 || id5 === id3 || id5 === id2 || id5 === id1 ){
            id5 = Math.floor(Math.random() * 99)
        }
        break
    case 6:
        nombre1 = prompt("Ingrese cual es tu primer POKEMON (tal vez un Pikachu? un Eevee? o cualquier otro 🥰 ), se le asignará una id de paciente a cada uno, debes recordarla para después retirar a tu pokemón!")
        nivel1 = prompt("ingrese el NIVEL del pokemon")
        posicion1 = 1
        id1 = Math.floor(Math.random() * 99)
        nombre2 = prompt("Ingrese cual es tu segundo POKEMON")
        nivel2 = prompt("ingrese el NIVEL del pokemon")
        posicion2 = 2
        id2 = Math.floor(Math.random() * 99)
        while(id2 === id1) { 
            id2 = Math.floor(Math.random() * 99)
        }
        nombre3 = prompt("Ingrese cual es tu tercer POKEMON")
        nivel3 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 3
        id3 = Math.floor(Math.random() * 99)
        while(id3 === id2 || id3 === id1){ 
            id3 = Math.floor(Math.random() * 99)
        }
        nombre4 = prompt("Ingrese cual es tu cuarto POKEMON")
        nivel4 = prompt("ingrese el NIVEL del pokemon")
        posicion4 = 4
        id4 = Math.floor(Math.random() * 99)
        while(id4 === id3 || id4 === id2 || id4 === id1 ){
            id4 = Math.floor(Math.random() * 99)
        }
        nombre5 = prompt("Ingrese cual es tu quinto POKEMON")
        nivel5 = prompt("ingrese el NIVEL del pokemon")
        posicion3 = 5
        id5 = Math.floor(Math.random() * 99)
        while(id5 === id4 || id5 === id3 || id5 === id2 || id5 === id1 ){
            id5 = Math.floor(Math.random() * 99)
        }
        nombre6 = prompt("Ingrese cual es tu ultimo POKEMON")
        nivel6 = prompt("ingrese el NIVEL del pokemon")
        posicion6 = 6
        id6 = Math.floor(Math.random() * 99)
        while(id6 === id5 || id6 === id4 || id6 === id3 || id6 === id2 || id6 === id1 ){
            id6 = Math.floor(Math.random() * 99)
        }
        break
}

// clase pokemon
class Pokemon {
    constructor(nombre, nivel, posicion, id){
        this.nombre = nombre
        this.nivel = nivel
        this.posicion = posicion
        this.id = id
    }
}

const pokemon1 = new Pokemon(nombre1, nivel1, posicion1, id1)
const pokemon2 = new Pokemon(nombre2, nivel2, posicion2, id2)
const pokemon3 = new Pokemon(nombre3, nivel3, posicion3, id3)
const pokemon4 = new Pokemon(nombre4, nivel4, posicion4, id4)
const pokemon5 = new Pokemon(nombre5, nivel5, posicion5, id5)
const pokemon6 = new Pokemon(nombre6, nivel6, posicion6, id6)

const pokemones = [pokemon1]

if(numero === 2) {
    pokemones.push(pokemon2)
}
if(numero === 3) {
    pokemones.push(pokemon2, pokemon3)
}
if(numero === 4) {
    pokemones.push(pokemon2, pokemon3, pokemon4)
}
if(numero === 5) {
    pokemones.push(pokemon2, pokemon3, pokemon4, pokemon5)
}
if(numero === 6) {
    pokemones.push(pokemon2, pokemon3, pokemon4, pokemon5, pokemon6)
}
console.log(pokemones)

alert("Ahora ingrese cuánto HP le falta a cada pokemón") 

switch (numero) { // switch para cada caso de: cantidad de pokemon del usuario/entrenador. asignación de id
    case 6:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le asignaremos la id de paciente = ${pokemones[1].id}. ¿cuánto HP le falta?`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le asignaremos la id de paciente = ${pokemones[2].id}. ¿cuánto HP le falta?`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le asignaremos la id de paciente = ${pokemones[3].id}. ¿cuánto HP le falta?`)
        hp5 = prompt(`A tu ${pokemones[4].nombre} le asignaremos la id de paciente = ${pokemones[4].id}. ¿cuánto HP le falta?`)
        hp6 = prompt(`A tu ${pokemones[5].nombre} le asignaremos la id de paciente = ${pokemones[5].id}. ¿cuánto HP le falta?`)
        // ciclo while para validar que se ingresen numeros y que a la vez no pregunte denuevo por los datos que sí se ingresaron correctamente.
        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[1].posicion}`)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[2].posicion}`)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[3].posicion}`)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        while (isNaN(hp5)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[4].posicion}`)
            hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)
        }
        while (isNaN(hp6)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[5].posicion}`)
            hp6 = prompt(`A tu ${pokemones[5].nombre} le falta:`)
        }
        break
    case 5:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le asignaremos la id de paciente = ${pokemones[1].id}. ¿cuánto HP le falta?`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le asignaremos la id de paciente = ${pokemones[2].id}. ¿cuánto HP le falta?`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le asignaremos la id de paciente = ${pokemones[3].id}. ¿cuánto HP le falta?`)
        hp5 = prompt(`A tu ${pokemones[4].nombre} le asignaremos la id de paciente = ${pokemones[4].id}. ¿cuánto HP le falta?`)

        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[1].posicion}`)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[2].posicion}`)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[3].posicion}`)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        while (isNaN(hp5)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[4].posicion}`)
            hp5 = prompt(`A tu ${pokemones[4].nombre} le falta:`)
        }
        break
    case 4:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le asignaremos la id de paciente = ${pokemones[1].id}. ¿cuánto HP le falta?`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le asignaremos la id de paciente = ${pokemones[2].id}. ¿cuánto HP le falta?`)
        hp4 = prompt(`A tu ${pokemones[3].nombre} le asignaremos la id de paciente = ${pokemones[3].id}. ¿cuánto HP le falta?`)

        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[1].posicion}`)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[2].posicion}`)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        while (isNaN(hp4)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[3].posicion}`)
            hp4 = prompt(`A tu ${pokemones[3].nombre} le falta:`)
        }
        break
    case 3:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)
        hp2 = prompt(`A tu ${pokemones[1].nombre} le asignaremos la id de paciente = ${pokemones[1].id}. ¿cuánto HP le falta?`)
        hp3 = prompt(`A tu ${pokemones[2].nombre} le asignaremos la id de paciente = ${pokemones[2].id}. ¿cuánto HP le falta?`)

        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[1].posicion}`)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        while (isNaN(hp3)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[2].posicion}`)
            hp3 = prompt(`A tu ${pokemones[2].nombre} le falta:`)
        }
        break
    case 2:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)
        hp2 = prompt(`a tu ${pokemones[1].nombre} le asignaremos la id de paciente = ${pokemones[1].id}. ¿cuánto HP le falta?`)

        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        while (isNaN(hp2)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[1].posicion}`)
            hp2 = prompt(`A tu ${pokemones[1].nombre} le falta:`)
        }
        break
    case 1:
        hp1 = prompt(`A tu ${pokemones[0].nombre} le asignaremos la id de paciente = ${pokemones[0].id}. ¿cuánto HP le falta?`)

        while (isNaN(hp1)) {
            alert(`Tienes ${pokemones.length} pokemones, pero ingresaste datos no válidos a tu pokemon n°${pokemones[0].posicion}`)
            hp1 = prompt(`A tu ${pokemones[0].nombre} le falta:`)
        }
        break
    default:
        alert("Numero no válido, sólo coloca el numero")
}


// calculadora de precio del servicio se sanacion pokemon
if (isNaN(numero) || numero > 6) {
    alert("Inténtalo denuevo")
} else {
    function calculadorPoke (pokeNumber = 1, dolar = 10) { // funcion para calcular costo base 
        return pokeNumber * dolar
    }
    let  costoBase = calculadorPoke(numero)
    
    function calculadorHp(hp1 = 0, hp2 = 0, hp3 = 0, hp4 = 0, hp5 = 0, hp6 = 0) { // funcion para calcular costo total por hp
        return 2 * hp1 + 2 * hp2 + 2 * hp3 + 2 * hp4 + 2 * hp4 + 2 * hp5 + 2 * hp6
    }
    const costoHp = calculadorHp(hp1, hp2, hp3, hp4, hp5, hp6)
    
    
    function sumarCosto(pokeNumber = 1, hpNumber = 0) { // funcion para sumar ambos costos.
        const costoCura = costoBase + costoHp
        return costoCura
    }
    let costoTotal = sumarCosto(costoBase, costoHp)
    
    alert(`Curar a tus pokemon cuesta ${costoTotal} dolares!`)
}

let idEncontrado1
let idEncontrado2
let idEncontrado3
let idEncontrado4
let idEncontrado5
let idEncontrado6

alert(`Gracias por preferir Centro Pokemón, sus pokemones están sanados!`)
do {
    repetir = false
    switch(numero) {
        case 1:
            idABuscar1 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            if (idEncontrado1 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
        case 2:
            idABuscar1 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar2 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            idEncontrado2 = pokemones.find(element => element.id === idABuscar2)
            if (idEncontrado1 === undefined || idEncontrado2 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
        case 3:
            idABuscar1 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar2 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar3 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            idEncontrado2 = pokemones.find(element => element.id === idABuscar2)
            idEncontrado3 = pokemones.find(element => element.id === idABuscar3)
            if (idEncontrado1 === undefined || idEncontrado2 === undefined || idEncontrado3 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
        case 4:
            idABuscar1 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar2 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar3 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar4 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            idEncontrado2 = pokemones.find(element => element.id === idABuscar2)
            idEncontrado3 = pokemones.find(element => element.id === idABuscar3)
            idEncontrado4 = pokemones.find(element => element.id === idABuscar4)
            if (idEncontrado1 === undefined || idEncontrado2 === undefined || idEncontrado3 === undefined || idEncontrado4 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
        case 5:
            idABuscar1 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar2 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar3 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar4 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar5 = parseFloat(prompt(`por favor vaya ingresando uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            idEncontrado2 = pokemones.find(element => element.id === idABuscar2)
            idEncontrado3 = pokemones.find(element => element.id === idABuscar3)
            idEncontrado4 = pokemones.find(element => element.id === idABuscar4)
            idEncontrado5 = pokemones.find(element => element.id === idABuscar5)
            if (idEncontrado1 === undefined || idEncontrado2 === undefined || idEncontrado3 === undefined || idEncontrado4 === undefined || idEncontrado5 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
        case 6:
            idABuscar1 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar2 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar3 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar4 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar5 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idABuscar6 = parseFloat(prompt(`por favor ingrese uno por uno los id de tus pokemon para poder entregárselos`))
            idEncontrado1 = pokemones.find(element => element.id === idABuscar1)
            idEncontrado2 = pokemones.find(element => element.id === idABuscar2)
            idEncontrado3 = pokemones.find(element => element.id === idABuscar3)
            idEncontrado4 = pokemones.find(element => element.id === idABuscar4)
            idEncontrado5 = pokemones.find(element => element.id === idABuscar5)
            idEncontrado6 = pokemones.find(element => element.id === idABuscar6)
            if (idEncontrado1 === undefined || idEncontrado2 === undefined || idEncontrado3 === undefined || idEncontrado4 === undefined || idEncontrado5 === undefined || idEncontrado6 === undefined) {
                alert(`un entrenador que está sentado en la sala de espera está reclamando que te estás llevando su pokemon! Ingresa el ID correcto por favor!`)
                repetir = true
                break
            } else {
                break
            }
    }
} while (repetir)
console.log(repetir)

let ids = []
ids.push(idEncontrado1)
ids.push(idEncontrado2)
ids.push(idEncontrado3)
ids.push(idEncontrado4)
ids.push(idEncontrado5)
ids.push(idEncontrado6)

console.log(ids)
console.log(idEncontrado1)
console.log(idEncontrado2)

switch(numero) {
    case 1:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel} ya está mucho mejor. Aquí lo tiene, gracias por preferir Centro pokemon Inc.`)
        break
    case 2:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel} y ${pokemones[1].nombre} de nivel ${ids[1].nivel} ya están mucho mejor. Aquí los tiene, gracias por preferir Centro pokemon Inc.`)
        break
    case 3:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel}, ${pokemones[1].nombre} de nivel ${ids[1].nivel} y ${pokemones[2].nombre} de nivel ${ids[2].nivel} ya están mucho mejor. Aquí los tiene, gracias por preferir Centro pokemon Inc.`)
        break
    case 4:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel}, ${pokemones[1].nombre} de nivel ${ids[1].nivel}, ${pokemones[2].nombre} de nivel ${ids[2].nivel} y ${pokemones[3].nombre} de nivel ${ids[3].nivel} ya están mucho mejor. Aquí los tiene, gracias por preferir Centro pokemon Inc.`)
        break
    case 5:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel}, ${pokemones[1].nombre} de nivel ${ids[1].nivel}, ${pokemones[2].nombre} de nivel ${ids[2].nivel}, ${pokemones[3].nombre} de nivel ${ids[3].nivel}y ${pokemones[4].nombre} de nivel ${ids[4].nivel}ya están mucho mejor. Aquí los tiene, gracias por preferir Centro pokemon Inc.`)
        break
    case 6:
        alert(`${ids[0].nombre} de nivel ${ids[0].nivel}, ${pokemones[1].nombre} de nivel ${ids[1].nivel}, ${pokemones[2].nombre} de nivel ${ids[2].nivel}, ${pokemones[3].nombre} de nivel ${ids[3].nivel}y ${pokemones[4].nombre} de nivel ${ids[4].nivel} y ${pokemones[5].nombre} de nivel ${ids[5].nivel} ya están mucho mejor. Aquí los tiene, gracias por preferir Centro pokemon Inc.`)
        break
}

