'use strict'

try{
    let x = 10;
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revisión de errores');
}

console.log('continuamos...');