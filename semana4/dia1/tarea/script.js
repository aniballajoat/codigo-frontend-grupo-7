//------------1------------------


let misDatos = {
    hobbie1: "dormir",
    hobbie2: "dormirx2",
    hobbie3: "dormirx3", 

    numMascotas: 2,

    hombre: true,
    mujer: false

};
//------------2------------------
let miNombre = prompt("Ingrese su nombre: ");
alert(`Saludos ${miNombre}!!`);
//------------3------------------
let raiz1, raiz2;

let a = prompt("ingrese a: ");
let b = prompt("ingrese b: ");
let c = prompt("ingrese c: ");


raiz1 = (-b + (b * b - 4 * a * c)**0.5) / (2 * a);
raiz2 = (-b - (b * b - 4 * a * c)**0.5) / (2 * a);

console.log(`Los resultados de la formula son ${raiz1} y ${raiz2}`);