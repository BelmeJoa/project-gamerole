let nombres = []
alert("Bienvenido al juego de la Mafia antes de entrar tienes q ingresar el nro de participantes y sus nombres.Graciass!")
let ingresarJugadores = () => {
    let cantidad = Number(prompt("Ingrese la cantidad de jugadores"))
    if (cantidad <= 5) {
        alert("Necesitas al menos 6 o mas personas para jugar o ingresa correctamente el numero de jugadores")
    } else {
        for (let i = 1; i <= cantidad; i++) {
            let nombre = prompt("Ingrese nombres de a uno").toLowerCase()
            nombres.push(nombre)
        } return nombres
    }
}
ingresarJugadores()
console.log(nombres)

for (let i = 0; i <= nombres.length - 1; i++) {
    document.getElementById("jugadores").innerHTML += `   ${i + 1}) ${nombres[i]}   `
}
//TEMPORIZADOR
let segundos = 120;
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