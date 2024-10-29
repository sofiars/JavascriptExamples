miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('Funcion 1');
}
function miFuncion2(){
    console.log('Funcion 2');
}

// Funciones de tipo call back

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(5, 5, imprimir);