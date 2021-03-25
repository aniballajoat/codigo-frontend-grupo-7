/*
const ahora = new Date();

console.log(ahora);

const fechaString = new Date("July 28 1821 12:00");

const milisegundos = ahora.getTime();

const anho = fechaString.getFullYear();

const mes = fechaString.getMonth();

const diaMes = fechaString.getDate();

const diaSemana = fechaString.getDay();
*/


/*
function obtenerEdad(anhoNacimiento){
    const fechaActual = new Date();
    const anho = fechaActual.getFullYear();
    return(anho - anhoNacimiento);
}

console.log(1996);*/

document.getElementById("cumpleaños").addEventListener("input", ponerEdad)

var x = document.getElementById("cumpleaños").value;
let edad = document.querySelector("h1");

function ponerEdad(){
    x = document.getElementById("cumpleaños").value;
    let aaaaa = new Date(x);
    console.log(aaaaa);
    let anho = aaaaa.getFullYear();
    let month = aaaaa.getMonth();
    let day = aaaaa.getDate();

    let anhoActual = new Date();

    let anho2 = anhoActual.getFullYear();
    let month2 = anhoActual.getMonth();
    let day2 = anhoActual.getDate();

    let miEdad = anho2 - anho;

    if(month2 < month){
        miEdad-=1;
    }
    else if(month2 === month){
        if(day2<=day){
            miEdad-=1;
        }
    }
    edad.textContent = `${miEdad}`;

    
}