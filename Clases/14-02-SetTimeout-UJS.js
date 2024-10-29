miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 seg
setTimeout(function(){console.log('saludooooosss')}, 4000);
setTimeout(() => { console.log('Saludoooo 3')}, 1000);