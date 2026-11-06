/*
Vamos a crear la función sumar(), la cual va a recibir dos variables y esas variables se van a sumar y 
va a mostrar un resultado el cual es la suma de los dos valores.

*/
function sumar()
{
    let var1 = parseInt(document.getElementById('num1').value);  //Este es el nombre de la variable, let es como se declara la variable la primera vez
    let var2 = parseInt(document.getElementById('num2').value); // Declaramos la siguiente variable con el nombre var2, se le asigna un tipo de dato y se llama el identificador

    let suma = var1 + var2;
    let resta = var1 - var2; 

    document.getElementById('resultado1').value = suma;   

}

function restar()
{
    let var1 = parseInt(document.getElementById('num1').value);  //Este es el nombre de la variable, let es como se declara la variable la primera vez
    let var2 = parseInt(document.getElementById('num2').value); // Declaramos la siguiente variable con el nombre var2, se le asigna un tipo de dato y se llama el identificador

    let resta = var1 - var2; 

    document.getElementById('resultado1').value = resta;   

}

function multi()
{
     let var1 = parseInt(document.getElementById('num1').value);  //Este es el nombre de la variable, let es como se declara la variable la primera vez
    let var2 = parseInt(document.getElementById('num2').value); // Declaramos la siguiente variable con el nombre var2, se le asigna un tipo de dato y se llama el identificador

    let multiplicar = var1 * var2;

    document.getElementById('resultado1').value = multiplicar;
}

function divi()
{
    let var1 = parseInt(document.getElementById('num1').value);
    let var2 = parseInt(document.getElementById('num2').value);

    let dividir = var1 / var2;

    if (var2 === 0)
    {
        alert('No se puede dividir por cero');
        return
    }

    document.getElementById('resultado1').value = dividir;
}

function potencia()
{
    let var1 = parseInt(document.getElementById('num1').value);
    let var2 = parseInt(document.getElementById('num2').value);

    let potenciar = var1 ** var2;

    document.getElementById('resultado1').value = potenciar;
}