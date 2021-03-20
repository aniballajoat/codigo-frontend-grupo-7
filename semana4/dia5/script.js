/*
function calcula_raiz(){

    let raiz1, raiz2;
    
    let a = prompt("ingrese a: ");
    let b = prompt("ingrese b: ");
    let c = prompt("ingrese c: ");

    console.log(`a=${a}   b=${b}   c=${c}`);

    let discriminante = b * b - 4 * a * c;
    
    if (discriminante > 0) {
        raiz1 = (-b + (b * b - 4 * a * c)**0.5) / (2 * a);
        raiz2 = (-b - (b * b - 4 * a * c)**0.5) / (2 * a);
    
        console.log(`Los resultados de la formula son ${raiz1} y ${raiz2}`);
    }
    
    else if (discriminante == 0) {
        raiz1 = raiz2 = -b / (2 * a);
    
        console.log(`Los resultados de la formula son ${raiz1} y ${raiz2}`);
    }
    
    else {
    
        console.log(`La discriminante es negativa`);
    }
}
calcula_raiz();*/

function formula(){
    let a = prompt("ingrese a: ");
    let b = prompt("ingrese b: ");

    let operacion = (a**4) + 
                    (4*((a**3)*b) )+ 
                    (6*((a**2)*(b**2)) )+ 
                    (4*((a*(b**3)) )+
                    ((b**4)));
    const retornar = document.querySelector("h1");
    let solucion = `el resultado de (a+b)^4 es ${operacion}`;
    retornar.textContent = solucion;
    console.log((a**4));
    console.log(4*((a**3)*b));
    console.log(6*((a**2)*(b**2)));
    console.log(4*(a*(b**3)));
    console.log((b**4));
}
formula()