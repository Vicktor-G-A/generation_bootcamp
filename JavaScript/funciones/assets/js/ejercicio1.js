// function invertir (saludo){
   
    /* var separar = saludo.split("");

    var invertirArreglo = separar.reverse();

    var unir = invertirArreglo.join("");

    return console.log(unir);  */
    
// }

//invertir("hola mundo");

// metodo de raul

const invertirTodo = (palabra = "") => {
    if(palabra.length <=1)return console.warn('No ingresaste texto');
    if(typeof(palabra) !== 'string') return console.error('El valor ingresado no es una palabra');

    let arreglo = palabra.split("");
    let reverse =arreglo.reverse();
    let unir = reverse.join("");

    return console.log(unir);
}

invertirTodo("Hola mundo");