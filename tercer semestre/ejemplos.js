let boletos = 10;
let precio = 20;
const impuesto = (boletos, precio) => boletos * precio *0.16;

console.log(`Es el resultado ${impuesto(boletos, precio)}, El impuesto de ${boletos} boletos, con el precio de ${precio}`);
edad = 20;

let beber = edad => {
if(edad <16){
    return "no puedes tomar"

}
else if(edad >16 && edad<18){
    return "puedes tomar pero no erea mayor de edad"

}
else{
    return "puedes tomar y eres mayor de edad"
}

}

console.log(`El sujeto de ${edad} años de edad : ${beber(edad)}`);

let cantidad = 100;

let ahorro = cantidad => cantidad * 12 * 0.77;

console.log(`el ahorro que tendras ingresando ${cantidad} al año, es de ${ahorro(cantidad)}`);

let semana = 255000;

let compraRiot = semana => 255000 / semana  * 7;

console.log(`Si ganas ${semana}, tendras que trabajar ${compraRiot(semana)} dias`);

let distancia = 200;
let litrosPorDistancia = distancia => 60 / 200 * distancia;

console.log(`Si quieres recorrer ${distancia} kilometros, tendras que llevar ${litrosPorDistancia(distancia)} litros`);


let salario = 2000;
let ahorro = 5000;

let ahorroAutomatico = (salario, ahorro) =>{
    let a = salario * 0.11
    let b = ahorro / a *7;
    
    return b;
    }
console.log(`el tiempo que tomara tu ahorro de ${ahorro} con tu salario de ${salario}, es de ${ahorroAutomatico(salario,ahorro)} dias`);
