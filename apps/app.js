//Saludo a diosito
alert("Hola buenas! Con esta app la idea es ayudarte con el juego y que no te explote la calabaza asi que lets go!")
//Cantidad
let nombres = []
let cantidad
const ingresarCantidad = ()=>{
    cantidad =  prompt("Ingresa la cantidad de jugadores")
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
    } }
  //add listado en el html
    for (let i = 1; i <= cantidad; i++) {
        document.getElementById("jugadores").innerHTML += `   ${(i)}) ${nombres[i-1]}   `
    } 
}
//nro de carta de cada
let cartas=[]
let ingresarCarta=()=>{
    for (let i = 1; i <= nombres.length; i++) {
        let carta = Number(prompt(`Ingrese numero de la carta del jugador ${i} ${nombres[i]}`))
        cartas.push(carta)
    }console.log(cartas)
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