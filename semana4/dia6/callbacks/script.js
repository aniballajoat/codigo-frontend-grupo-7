////callbacks
/*
function mostrarAlerta(){
    alert("Hola!!");
}

const boton = document.querySelector("button")

boton.addEventListener("click", mostrarAlerta)

*/
let segundos = 6;
function empezarCuentaAtras(){
    let intervalo = setInterval(function(){
        if(segundos===0){
            clearInterval(intervalo);
        }
        else{

            segundos--;
            imprimirSegundos();
        }
    }, 1000);
}

function imprimirSegundos(){
    console.log(segundos);
}
empezarCuentaAtras();
console.log("termino la cuenta");