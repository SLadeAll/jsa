/*
El siguiente listado contiene los rangos de magnitud de
temblores en la escala Richter y sus descriptores
Micro: menos de 2.0
Muy menor: 2.0 a menos de 3.0
Menor: 3.0 a menos de 4.0
4
Ligero: 4.0 a menos de 5.0
Moderado: 5.0 a menos de 6.0
Fuerte: 6.0 a menos de 7.0
Mayor: 7.0 a menos de 8.0
*/
var sismo= parseInt(prompt("De cual magnitud fue el sismo"));

	if(sismo<=2){
		alert("es un Micro Terremoto");
	}
	
	if( sismo>2 && sismo<3){
		alert("Es un sismo Muy menor");
	}
	
	if(sismo>3 && sismo<4){
		alert("Es sismo Menor");
	}
		if(sismo>4 && sismo<5){
		alert("Es un sismo Ligero");
	}
	
	if( sismo>5 && sismo<6){
		alert("Es un sismo Moderado");
	}
	
	if( sismo>6 && sismo<7){
		alert("Es un sismo Fuerte");
	}
	
	if( sismo>7 && sismo<8){
		alert("Es un sismo Mayor");
	}
	
	if( sismo>=8){
		alert("!!!!¿Porque no estas pidiendo ayuda?¡¡¡¡");
	}
	
