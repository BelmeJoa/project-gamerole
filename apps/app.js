//Saludo a diosito
//Cantidad
let nombres = []
const ingresarCantidad = ()=>{
    // cantidad = prompt("Ingresa la cantidad de jugadores")
    let cantidad = document.querySelector("#cantidad").value
    if (cantidad <= 5 || cantidad=="" ) {
        alert("Necesitas al menos 6 personas para poder jugar. Ingresa la cantidad nuevamente")
    }
    nombres.length = cantidad 
    return nombres.length
}
console.log(nombres.length)
let ingresarJugadores = (cantidad) => {
    if(cantidad>=6){
        for (let i = 1; i <= cantidad; i++) {
            let nombre = prompt(`Ingrese nombre del jugador ${i}`).toLowerCase()
            nombres.splice((i-1),1,nombre)
            console.log(nombres)
        } for (let i = 1; i <= cantidad; i++) {
        document.getElementById("jugadores").innerHTML += `     ${(i)}) ${nombres[i-1]}      `
        }
        
    }else{alert("Ingresa la cantidad de jugadores")}
    select();
}
let reset =()=>{
    window.location.reload()
}
let $select
let select = ()=>{
    $select= document.getElementById("select-mafia")
    options()
    $select= document.getElementById("select-muerto")
    options()
    $select= document.getElementById("select-policia")
    options()
    $select= document.getElementById("select-doctor")
    options()
    $select= document.getElementById("select-curado")
    options()
    $select= document.getElementById("select-puta")
    options()
    $select= document.getElementById("select-anulado")
    options()
    $select= document.getElementById("select-carnicero")
    options()
    $select= document.getElementById("select-callado")
    options()
}
let options = ()=>{

    for (let i=1; i <= nombres.length; i++){
        $select.innerHTML+=`
        <option value="${nombres[i-1]}">${nombres[i-1]}</option>`
    }
} 
//nro de carta de cada
// let cartas= []
// let ingresarCarta=()=>{
//     for (let i = 0; i <= nombres.length; i++) {
//         let carta = Number(prompt(`Ingrese numero de la carta del jugador ${i} ${nombres[i-1]}`))}
//         cartas.push(carta)
//     console.log(cartas)
// }
const ronda = (e) => { 
    e.preventDefault()    
    let mafia = document.querySelector("#select-mafia").value 
    let muere = document.querySelector("#select-muerto").value
    let policia = document.querySelector("#select-policia").value
    let doctor = document.querySelector("#select-doctor").value 
    let curado = document.querySelector("#select-curado").value
    let puta =document.querySelector("#select-puta").value
    let anulado =document.querySelector("#select-anulado").value
    let carnicero = document.querySelector("#select-carnicero").value
    let callado = document.querySelector("#select-callado").value
    let situacion
    if(muere==curado && doctor==anulado){
        situacion = `Se muere ${muere} y se queda callado esta ronda ${callado}`
    }else if(muere==curado && doctor!=anulado && anulado!=carnicero){
        situacion= `No se muere nadie y se queda callado esta ronda ${callado}`
    }else if(mafia==anulado){
        situacion= `No se muere nadie y se queda callado esta ronda ${callado}`
    } else if(muere==carnicero && anulado==carnicero){
        situacion= `Se muere ${muere}`
    } else if(anulado==carnicero && muere!=carnicero){
        situacion= `Se muere ${muere}`
    } else if(muere==curado && anulado==carnicero){
        situacion=`No se muere nadie y pueden hablar todos esta ronda`
    } else if(muere==carnicero && anulado!=carnicero){
        situacion = `Se muere ${muere} y se queda callado esta ronda ${callado}`
    }else{
        situacion = `Se muere ${muere} y se queda callado esta ronda ${callado}`
    }
    document.getElementById("ronda").innerHTML = situacion
}
let rond = document.querySelector("#formulario");
rond.addEventListener("submit", ronda)
//TEMPORIZADOR
let segundos = 120;
const actualizarTiempo=()=>{
	document.getElementById("segundos").innerHTML = segundos;
	if(segundos==0){
        alert("El tiempo se acabo..");
        window.navigator.vibrate([1000]);
        segundos=120
	}else{
		segundos--;
		setTimeout("actualizarTiempo()",1000);
	}
}