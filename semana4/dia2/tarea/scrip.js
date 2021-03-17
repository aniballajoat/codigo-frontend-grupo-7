let seleccionar = document.querySelector("select");
let parrafo = document.querySelector('p');
let titulo = document.querySelector("h1");

seleccionar.addEventListener('change', establecerCancion);

function establecerCancion(){
    let eleccion = seleccionar.value;
    console.log(eleccion);

    if(eleccion === "cancion1"){
        titulo.textContent = "Cancion 1";
        parrafo.textContent = "Aqui letra cancion 1";
    }
    else if(eleccion === "cancion2"){
        titulo.textContent = "Cancion 2";
        parrafo.textContent = "Aqui letra cancion 2";
    }
    else if(eleccion === "cancion3"){
        titulo.textContent = "Cancion 3";
        parrafo.textContent = "Aqui letra cancion 3";
    }
    else if(eleccion === "cancion4"){
        titulo.textContent = "Cancion 4";
        parrafo.textContent = "Aqui letra cancion 4";
    }
    else{
        titulo.textContent = "Cancion x";
        parrafo.textContent = "Aqui letra si selecciona";
    }
}