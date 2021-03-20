/*
let mi_nombre = prompt("Adivina mi nombre?");
while(mi_nombre.toLowerCase()!== "anibal"){
    mi_nombre = prompt("Sigue intentando!!");
}
alert("Hey!!, adivinaste mi nombre");


*/





/*
let mi_nombre = prompt("Adivina mi nombre?");

do{
    mi_nombre = prompt("Sigue intentando!!");
}while(mi_nombre.toLowerCase()!== "anibal")
alert("Hey!!, adivinaste mi nombre");
*/

let mi_nombre = prompt("Adivina mi nombre?");
function adivina(){
    if (mi_nombre.toLowerCase()==="anibal"){
        alert("Hey!!, adivinaste mi nombre.");
    }
    else{
        mi_nombre = prompt("Sigue intentado!!");
        adivina();
    }
}
adivina();