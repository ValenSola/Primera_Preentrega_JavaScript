
function eleccion(jugador){
    if(jugador == 1) {
        alert('Elegiste PIEDRA');
    } else if(jugador == 2) {
        alert('Elegiste PAPEL');
    } else if(jugador == 3) {
        alert('Elegiste TIJERA');
    }
}

function contrincante(rival){
    if(rival == 0) {
        alert('El contrincante eligió PIEDRA');
    } else if(rival == 1) {
        alert('El contrincante eligió PAPEL');
    } else if(rival == 2) {
        alert('El contrincante eligió TIJERA');
    }
}

function validar(rival, jugador){
    if(rival == (jugador-1)) {
        alert('EMPATE!');
    } else if(rival == 0 && jugador == 2) {
        alert('GANASTE!');
    } else if(rival == 1 && jugador == 3) {
        alert('GANASTE!');
    } else if(rival == 2 && jugador == 1) {
        alert('GANASTE!');
    } else {
        alert('PERDISTE');
    }
}

alert('¡Bienvenido! Elige una opcion:');
let confirmacion=1;
while (confirmacion!=2) {
    let resultado = false;
    let jugador = null;

    do{
    jugador = prompt('Escribe 1 para PIEDRA, 2 para PAPEL, 3 para TIJERA');
    if((jugador >= 1) && (jugador <= 3)){
        resultado=true;
        eleccion(jugador);
    } else if(resultado = false);
    }while (resultado == false);
    while(resultado == true) {

        let rival = Math.round(Math.random() * 2);
        contrincante(rival);
        
        validar(rival, jugador);
        resultado=false;
    }

    do{
        confirmacion = prompt('¿Volver a Jugar? (1 para continuar o 2 para salir)');
    } while ((confirmacion!=1) && (confirmacion!=2));
}

alert('¡¡Gracias por jugar!!')