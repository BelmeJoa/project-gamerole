//Saludo a diosito
alert("Hola buenas! Con esta app la idea es ayudarte con el juego y que no te explote la calabaza asi que lets go!")
//Cantidad
let nombres = []
let cantidad
const ingresarCantidad = ()=>{
    cantidad = prompt("Ingresa la cantidad de jugadores")
    if (cantidad <= 5 || cantidad=="" ) {
        document.getElementById("mensaje").innerHTML= "Necesitas al menos 6 personas para poder jugar. Ingresa la cantidad nuevamente"
    }
    nombres.length = cantidad 
    return cantidad
}
console.log(cantidad)
let ingresarJugadores = (cantidad) => {
    if(cantidad>=6){
        for (let i = 1; i <= cantidad; i++) {
            let nombre = prompt(`Ingrese nombre del jugador ${i}`).toLowerCase()
            nombres.splice((i-1),1,nombre)
            console.log(nombres)
        } for (let i = 1; i <= cantidad; i++) {
        document.getElementById("jugadores").innerHTML += `   ${(i)}) ${nombres[i-1]}   `
    }
}
  //add listado en el html
     
}
const cantidadMafia =()=>{
    numeroMafia = prompt("Ingresa la cantidad de mafias")
    return numeroMafia
}
//nro de carta de cada
// let cartas= []
// let ingresarCarta=()=>{
//     for (let i = 0; i <= nombres.length; i++) {
//         let carta = Number(prompt(`Ingrese numero de la carta del jugador ${i} ${nombres[i-1]}`))}
//         cartas.push(carta)
//     console.log(cartas)
// }

const ronda = () => {
    let mafia = prompt('A quien decide matar?').toLocaleLowerCase()
    let doctor = prompt('A quien decide curar?').toLocaleLowerCase()
    let puta = prompt('A quien decide anular?').toLocaleLowerCase()
    let carnicero = prompt('A quien deciden callar?').toLocaleLowerCase()
    if(mafia==doctor && doctor==puta){
        let situacion = `Se muere ${mafia} y se queda callado esta ronda ${carnicero}`
    }
    if(mafia==doctor )
}
//TEMPORIZADOR
let segundos = 5;
const actualizarTiempo=()=>{
	document.getElementById("segundos").innerHTML = segundos;
	if(segundos==0){
        alert("El tiempo se acabo..");
        segundos=120
	}else{
		segundos--;
		setTimeout("actualizarTiempo()",1000);
	}
}