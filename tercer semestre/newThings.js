let nombre = prompt(`Ingrese su nombre`);
if (nombre=="tlaxcala" || nombre=="Tlaxcala"){
    
}


//-------------------------------------------
let x = prompt(`Ingrese el valor que quiera multiplicar`);
let y = prompt(`Ingrese el limite de la tabla`);
for(let i = 1; i<=y; i++){
    console.log(`${x} x ${i} = ${x*i}`)
}
//------------------------------------------------------------
let promedio = 0;
for(let semestre = 1; semestre<=8; semestre++){
    let calificacion = prompt(`Ingrese cuanto saco en el semestre numero ${semestre} `);
    promedio = promedio + parseFloat(calificacion);
    console.log(promedio);
}
promedio = promedio/8;
console.log(`Su promedio es de : ${promedio.toFixed(1)} `)
//-----------------esfera 4/3*3.1416*

let radio = prompt(`Ingrese el el radio de la esfera`);
let volumenEsfera = rad =>{
    return ( 4/3*3.1416 * Math.pow(rad,3) ) ;
}
let total = volumenEsfera(radio);
console.log(`El volumen de la esfera ${total.toFixed(2)}`)

//--------------------escribir una escalera con N filas

let cuenta = parseFloat(prompt(`Ingrese el numero de filas que quiera en la escalera de numeros`));
let esc = "";

for(let e = 1; e<=cuenta; e++){
    esc = esc  + " " + e;
    console.log(esc);
}
//----------------dias de un mes en especifico
let mes = parseFloat(prompt(`Ingrese un numero de mes`));

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    for (let dia = 1; dia <= 31; dia++) {
        console.log(`mes: ${mes} dia: ${dia}`)
    }
} 
else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    for (let dia = 1; dia <= 30; dia++) {
        console.log(`mes: ${mes} dia: ${dia}`)
    }
    
} 
else if(mes == 2) {
    for (let dia = 1; dia <= 28; dia++) {
        console.log(`mes: ${mes} dia: ${dia}`)
    }
}
else{
    console.log(`ese mes no existe`);
}

//Pesos Colombianos
let pesos = parseFloat(prompt(`Ingrese la cantidad de pesos a convertir`));
let mxnToColm = peso =>  peso*160.68;

console.log(`el total de ${pesos} mexicanos convertidos a pesos Colombianos es de ${mxnToColm(pesos)} `);
// valor x a potencia y

let x = parseFloat(prompt(`ingrese el valor  a elevar `))
let y = parseFloat(prompt(`ingrese la potencia`))

console.log(`el valor de ${x} a la potencia ${y} es igual a ${Math.pow(x,y)}`);