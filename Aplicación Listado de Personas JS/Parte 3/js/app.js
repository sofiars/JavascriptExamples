const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Sofía', 'Lara')
];
function mostrarPersonas(){
    let texto = ' ';
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}