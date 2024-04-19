let input = document.querySelectorAll("input");/* trae todos los input*/

function agregarAPantalla(numero){
    input[0].value += numero;
}

function ejecutar(){
    input[0].value = eval( input[0].value);/*evalua lo q hay adentro y lo combierte(suma, resta)*/
}