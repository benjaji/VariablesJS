alert('Bienvenido al programa que convierte dias en años semanas y dias');
var numeroIngresado = 0;
var anoConvertido =0;
var residuoAnoConvertido =0;
var semanaConvertida=0;
var residuoSemanaConvertida =0;
//Entrada
numeroIngresado = prompt('Ingrese numero para convertir en semanas y dias');
//proceso
anoConvertido = Math.floor(  parseInt(numeroIngresado) / 365  );
residuoAnoConvertido = (parseInt(numeroIngresado) % 365);
semanaConvertida = Math.floor ( residuoAnoConvertido / 7 );
residuoSemanaConvertida = Math.floor( residuoAnoConvertido % 7 );
//salida
alert('Numero Ingresado: '+numeroIngresado);
alert('Años: '+anoConvertido);
alert('Semanas: '+semanaConvertida);
alert('Dias: '+residuoSemanaConvertida);

document.write('Años: '+anoConvertido);