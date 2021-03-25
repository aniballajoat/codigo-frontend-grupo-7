
function comparaString(){

    let a = prompt("Ingrese cadena 1").toLowerCase();;
    let b = prompt("Ingrese cadena 2").toLowerCase();;
    switch(a==b){
        case true:
            alert("si son iguales");
            break;
        case false:
            alert("no son iguales");
            break;
    }
}
comparaString();