alert('Bienvenido al programa que convierte temperaturas');
var tempCelsius=0;
var tempKelvin=0;
var tempFah=0;
//entrada
tempCelsius = prompt('Digite la temperatura en grados celsius');
//proceso
tempKelvin = parseInt(tempCelsius) + 273,15;
tempFah = ( parseInt(tempCelsius) * 9/5) +32;
//salida
alert('La temperatura '+tempCelsius+' en grados Kelvin es: '+tempKelvin);
alert('La temperatura '+tempCelsius+' en grados Fahrenheit es: '+tempFah); 
