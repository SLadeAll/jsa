var lado1 = parseInt(prompt("Coloque el primer lado"));
var lado2 = parseInt(prompt("Coloque el segundo lado"));
var lado3 = parseInt(prompt("Coloque el tercer lado"));

if(lado1===lado2 && lado2===lado3)
{
	console.log("Es un triangulo equilatero");
}
else if(lado1===lado2 && lado2 != lado3)
{
	console.log("Es un triangulo isoceles");
}
else
{
	console.log("Es un triangulo escaleno");
}