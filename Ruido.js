/*
Martillo neumático: 130 db
Podadora: 106 db
Alarma de reloj: 70 db
Cuarto tranquilo: 40db
*/
var decibeles = parseInt(prompt("Ingrese el numero de decibeles del ruido: "));

if (decibeles===40)
{
	console.log("es un Cuarto tranquilo");
}
else if (decibeles===70)
{
	console.log("es una Alarma de reloj");
}
else if (decibeles===106)
{
	console.log("es una Podadora");
}
else if (decibeles===130)
{
	console.log("es un Martillo neumático");
}
else if (decibeles<40)
{
	console.log("es un Cuarto demasiado tranquilo o te estas quedando sordo");
}
else if (decibeles>130)
{
	console.log("es Algo mas ruidoso que un martillo neumático corre o tee quedaras sordo");
}
else if (decibeles >106 && decibeles<130)
{
	console.log("es Algo entre una Podadora y un Martillo neumático");
}
else if (decibeles <106 && decibeles>70)
{
	console.log("es Algo entre una Podadora y una Alarma de Reloj");
}
else if (decibeles >40 && decibeles<70)
{
	console.log("es Algo entre una Podadora y una Alarma de Reloj");
}