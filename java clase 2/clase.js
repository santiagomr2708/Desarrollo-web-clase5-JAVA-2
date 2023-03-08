//funcion tipo flechas
let sumar =(number)=>{
    return number+5
}
//funcion asignada a una variable
let f=sumar;

console.log(f(5));//usando f
console.log(sumar(5));//usando sumar

/**
 * 
 * se trata de  enviarle como parametro de entrada 
 * a una funcion,otra funcion
 */
const esPar=(numero)=>{
    return numero%2==0; //regresa un bolean
}
const validarParidad = (num,callbackFn)=>{
    const esPar= callbackFn(num);
    console.log("el número es entero? : "+esPar);
}

validarParidad(9,esPar)
//callback function
const dividePorDos = (numero)=>{return numero/2;}

const divideNumero = (numero, callbackFn)=>{
    return callbackFn(numero);
}

console.log(divideNumero(10,dividePorDos));

/*Metodos para arreglos*/

const numeros=[1,2,3,20,893,452];
let numerosDos=[1,2,3,20,893,452];

//.reduce()
const sumarValores = numeros.reduce((acumulador,valorActual)=>{
    return acumulador+valorActual;
});

console.log(sumarValores);

//.forEach()

const fnDos= numerosDos.forEach(number=>{
    console.log(number);
});

//.filter

const fnTres= numerosDos.filter(number=>{
    //como voy a filtrar, la condicion
    return number>10;
});

console.log(fnTres);

//.map()
const nombresPersonas= ["carlos","juanma","juanjo","santiago"];

const anuncios= nombresPersonas.map(miembro=>{
    return miembro + " se unió al grupo";
})

console.log(anuncios);

//ejercicio funcion callback
function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

//ejercicio metodos para un arreglo
let vegetales = ['Repollo', 'lechuga', 'tomate', 'Zanahoria']
console.log(vegetales)

let pos = 1, numElementos = 2

let elementosEliminados = vegetales.splice(pos, numElementos)

console.log(vegetales)

