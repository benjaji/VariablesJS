alert ('Bienvenido al programa que opera dos numeros');
var dato1 =0;
var dato2 =0;
var resultadoSuma =0;
var resultadoResta =0;
var resultadoMultiplicacion =0;
var resultadoDivision =0;
var resultadoModulo =0;

dato1=prompt('Por favor ingrese el dato1');
dato2=prompt('Por favor ingrese el dato2');
resultadoSuma = parseInt(dato1)+parseInt(dato2);
resultadoResta = parseInt(dato1)-parseInt(dato2);
resultadoMultiplicacion = parseInt(dato1)*parseInt(dato2);
resultadoDivision = parseInt(dato1) / parseInt(dato2);
resultadoModulo = parseInt(dato1) % parseInt(dato2);

alert('La suma de dato1 con dato2 es: '+resultadoSuma);
alert('La resta de dato1 con dato2 es: '+resultadoResta);
alert('La multiplicacion de dato1 con dato2 es: '+resultadoMultiplicacion);
alert('La division de dato1 con dato2 es: '+resultadoDivision);
alert('El modulo de dato1 con dato2 es: '+resultadoModulo);
