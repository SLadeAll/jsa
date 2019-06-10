for (let hora = 0; hora < 24; hora++) {
    for (let minuto = 0; minuto < 60; minuto++) {
        console.log(`Hora: ${hora}  minuto: ${minuto}`);
    }
}
//tablas del 1 al 5, que lleguen al 100 (for)
for (let tabla = 1; tabla <= 5; tabla++) {
    for (let multiplo = 1; multiplo < 101; multiplo++) {
        console.log(`${tabla} x ${multiplo} = ${tabla*multiplo}`)
    }
}
console.log(`-------------------------------------------------------------------------------------------------`)

//tablas del 1 al 5, que lleguen al 100 (while)
let tabla = 1;
let multiplo = 1;

while (tabla < 6) {
    while (multiplo < 101) {
        console.log(`${tabla} x ${multiplo} = ${tabla*multiplo}`);
        multiplo++
    }
    multiplo = 1;
    tabla++;
}
console.log(`-------------------------------------------------------------------------------------------------`)

//tablas del 1 al 5, que lleguen al 100 (do while)
let tablaA = 1;
let multiploA = 1;

do {
    do {
        console.log(`${tablaA} x ${multiploA} = ${tablaA*multiploA}`);
        multiploA++
    } while (multiploA < 101)
    multiploA = 1;
    tablaA++;
} while (tablaA < 6)

//dias de los meses (for)

for (let mes = 1; mes <= 12; mes++) {
    for (let dia = 1; dia <= 31; dia++) {
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
            console.log(`mes: ${mes} dia: ${dia}`)
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            console.log(`mes: ${mes} dia: ${dia}`);
            if (dia == 30) {
                break;
            }
        } else {
            console.log(`mes: ${mes} dia: ${dia}`);
            if (dia == 28) {
                break;
            }
        }
    }
}
console.log(`-------------------------------------------------------------------------------------------------`)
//dias de los meses (while)

let mes = 1;
let dia = 1;
while (mes < 13) {
    while (dia <= 31) {

        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
            console.log(`mes: ${mes} dia: ${dia}`)
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            console.log(`mes: ${mes} dia: ${dia}`);
            if (dia == 30) {
                break;
            }
        } else {
            console.log(`mes: ${mes} dia: ${dia}`);
            if (dia == 28) {
                break;
            }
        }
        dia++;
    }
    dia = 1;
    mes++;
}
console.log(`-------------------------------------------------------------------------------------------------`)

//dias de los meses ( do while)

let mesA = 1;
let diaB = 1;
do {
    do {

        if (mesA == 1 || mesA == 3 || mesA == 5 || mesA == 7 || mesA == 8 || mesA == 10 || mesA == 12) {
            console.log(`mes: ${mesA} dia: ${diaB}`)
        } else if (mesA == 4 || mesA == 6 || mesA == 9 || mesA == 11) {
            console.log(`mes: ${mesA} dia: ${diaB}`);
            if (diaB == 30) {
                break;
            }
        } else {
            console.log(`mes: ${mesA} dia: ${diaB}`);
            if (diaB == 28) {
                break;
            }
        }
        diaB++;
    } while (diaB <= 31)
    diaB = 1;
    mesA++;
} while (mesA < 13)

//3 estudiantes 8 semestres | calificacion 10 inicial | pierden 0.3, 0.5 y 0.7 respectivamente(for)

let promA = 0;
let resta = 0.3;
let calA = 10;
for (let est = 1; est <= 3; est++) {

    for (let sem = 1; sem < 9; sem++) {
        if (sem == 1) {
            promA = calA;
            console.log(promA);
        } else {
            calA = calA - resta;
            promA = promA + calA;
            console.log(promA);
        }
    }
    console.log(`Promedio del estudiante ${est} del total ${promA} es de: ${promA/8} `);

    promA = 0;
    calA = 10;
    resta = resta + 0.2;
}
console.log("--------------------------------------------------------")
//3 estudiantes 8 semestres | calificacion 10 inicial | pierden 0.3, 0.5 y 0.7 respectivamente(while)
let promB = 0;
let restaB = 0.3;
let calB = 10;
let sem = 1;
let est = 1;
while (est <= 3) {

    while (sem < 9) {
        if (sem == 1) {
            promB = calB;
            console.log(promB);
        } else {
            calB = calB - restaB;
            promB = promB + calB;
            console.log(promB);
        }
        sem++;
    }
    console.log(`Promedio del estudiante ${est} del total ${promB} es de: ${promB/8} `);
    promB = 0;
    calB = 10;
    restaB = restaB + 0.2;
    est++;
    sem = 1;
}
console.log("--------------------------------------------------------")

//3 estudiantes 8 semestres | calificacion 10 inicial | pierden 0.3, 0.5 y 0.7 respectivamente(do while)
let promC = 0;
let restaC = 0.3;
let calC = 10;
let seme = 1;
let estu = 1;
do {

    do {
        if (seme == 1) {
            promC = calC;
            console.log(promC);
        } else {
            calC = calC - restaC;
            promC = promC + calC;
            console.log(promC);
        }
        seme++;
    } while (seme < 9)
    console.log(`Promedio del estudiante ${estu} del total ${promC} es de: ${promC/8} `);
    promC = 0;
    calC = 10;
    restaC = restaC + 0.2;
    estu++;
    seme = 1;
} while (estu <= 3)
//volumen de 6 cubos que aumentan 3 unidades con cada iteracion (for)
let lado = 2;

for (let cubo = 1; cubo <= 6; cubo++) {
    let volumen = lado;
    for(let veces = 1; veces<=2; veces++){
        volumen = volumen * lado;
        
     }
     
    console.log(`el cubo ${cubo} con el tamaño de ${lado} unidades tiene un volumen de: ${volumen}`);
    lado += 3;
}
//volumen de 6 cubos que aumentan 3 unidades con cada iteracion (while)
console.log(`--------------------------------------`)
let ladoB = 2;
let cubo = 1;
let veces = 1;
while( cubo <= 6 ) {
    let volumen = ladoB;
    while( veces<=2){
        volumen = volumen * ladoB;
        veces++
     }
     
    console.log(`el cubo ${cubo} con el tamaño de ${ladoB} unidades tiene un volumen de: ${volumen}`);
    ladoB += 3;
    volumen = ladoB;
    veces = 1;
    cubo++;
}
//volumen de 6 cubos que aumentan 3 unidades con cada iteracion (do while)
console.log(`--------------------------------------`)
let ladoC = 2;
let cuboC = 1;
let vecesA = 1;
while( cuboC <= 6 ) {
    let volumen = ladoC;
    while( vecesA<=2){
        volumen = volumen * ladoC;
        vecesA++
     }
     
    console.log(`el cubo ${cuboC} con el tamaño de ${ladoC} unidades tiene un volumen de: ${volumen}`);
    ladoC += 3;
    volumen = ladoC;
    vecesA = 1;
    cuboC++;
}
//piramide de numeros (for)
let cuenta = " ";

for (let i = 1; i <= 1; i++) {
    for(let e = 1; e<=10; e++){
        cuenta = cuenta + " " + e;
        console.log(cuenta);
    }
}
//piramide de numeros (while)
let cuenta1 = " ";
let i = 1;
let e = 1;
while( i <= 1 ) {
    while( e<=10 ){
        cuenta1 = cuenta1 + " " + e;
        console.log(cuenta1);
        e++
    }
    i++
}
//piramide de numeros ( do while)
let cuenta2 = " ";
let ia = 1;
let ea = 1;
while( ia <= 1 ) {
    while( ea<=10 ){
        cuenta2 = cuenta2 + " " + ea;
        console.log(cuenta2);
        ea++
    }
    ia++
}

let cuenta = " ";
for (let i = 1; i <= 10; i++) {
    
    
        cuenta = cuenta + " " + "*" ;
        console.log(cuenta);
}