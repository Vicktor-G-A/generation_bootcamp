/* funciones, nos permiten reutilizar còdigo */

function saludar(nombre = "Panchito", apellido = ""){
    
    //string normal
    //console.log('Hola mi nombre es:', nombre, apellido);
    //template strings, plantillas literales
    //console.log(`Hola mi nombre es: ${nombre?"Raul":"Desconocido"}`);     
    return `Mi nombre es ${nombre} ${apellido}`
}

saludar("pedro", "Pérez");//la invocación o llamada de la funcion

let funcionSaludar = saludar('Felipe', 'Maqueda');
console.log (funcionSaludar);

console.log(saludar('Alberto', 'Hernández'));

/* 
document.write('<h1>Este es un h1</h1>');
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`);//plantilla literal
 */

/* 
if(){
 codigo
}else{
    otro codigo
} 
*/


console.log(funcionSaludar.toLowerCase());


/* funcion declarada */

function suma(a,b) {
    return a + b;
}

console.log(suma(10,20));

/* hoisting

 */


/* Funciones expresadas | funcion expresión */
const resta= function(a , b){
    return a + b;
}

console.log(resta(30, 10));

/* setTimeout(() => {
    
}, 3000); */

//funcion flecha
const multiplicacion = (a,b) => a * b;

console.log(multiplicacion(40, 5));