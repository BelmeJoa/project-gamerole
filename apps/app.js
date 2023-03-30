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
//nro de carta de cada
// let cartas= []
// let ingresarCarta=()=>{
//     for (let i = 0; i <= nombres.length; i++) {
//         let carta = Number(prompt(`Ingrese numero de la carta del jugador ${i} ${nombres[i-1]}`))}
//         cartas.push(carta)
//     console.log(cartas)
// }

const ronda = () => {
    let numeroMafia = prompt(`Ingresa la cantidad de mafias con vida`)
    let mafia = prompt('SE LEVANTA LA MAFIA. A quien decide matar?').toLocaleLowerCase()
    let doctor = prompt('SE LEVANTA EL DOCTOR. A quien decide curar?').toLocaleLowerCase()
    let puta = prompt('SE LEVANTA LA PUTA. A quien decide anular?').toLocaleLowerCase()
    let carnicero = prompt('SE LEVANTA EL CARNICERO. A quien deciden callar?').toLocaleLowerCase()
    let situacion
    if(mafia==doctor && doctor==puta){
        situacion = `Se muere ${mafia} y se queda callado esta ronda ${carnicero}`
    }else if(mafia==doctor && doctor!=puta && puta!=carnicero){
        situacion= `No se muere nadie y se queda callado esta ronda ${carnicero}`
    }else if(mafia==puta && numeroMafia>=2){
        situacion = `Se muere ${mafia} y se queda callado esta ronda ${carnicero}`
    } else if(mafia==puta && numeroMafia==1){
        situacion= `No se muere nadie y se queda callado esta ronda ${carnicero}`
    } else if(mafia==carnicero && puta==carnicero){
        situacion= `Se muere ${mafia}`
    } else if(puta==carnicero && mafia!=carnicero){
        situacion= `Se muere ${mafia}`
    } else if(mafia==doctor && puta==carnicero){
        situacion=`No se muere nadie y pueden hablar todos esta ronda`
    } else if(mafia==carnicero && puta!=carnicero){
        situacion = `Se muere ${mafia} y se queda callado esta ronda ${carnicero}`
    }else{
        situacion = `Se muere ${mafia} y se queda callado esta ronda ${carnicero}`
    }
    document.getElementById("ronda").innerHTML = situacion
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