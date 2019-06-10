var lado = prompt("ingrese los lados de la figura ");

switch (lado) {
  case "3":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valor1
    console.log("Es un triangulo");
    break;
  case "4":
    //Sentencias ejecutadas cuando el resultado de expresion coincide con valor2
    console.log("Es un cuadrado");
    break;
  
  case "5":
    console.log("Pentagono");
 
    break;
  case "6":
    console.log("Hexagono");
 
    break;
  case "7":
    console.log("Heptagono");
 
    break;
  case "8":
    console.log("Octagono");
 
    break;  
  case "9":
    console.log("Nonagono");
 
    break;  
  case "10":
    console.log("Decagono");
 
    break;
  default:
    //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
    console.log("el numero de lados es mayor o menor a lo que podemos manejar")
    break;
}