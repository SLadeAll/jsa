var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];


//promedio de 8 numeros en un array
var num = [8,9,12,13,7,15,22,10];
let prom = 0;
for(let i = 0; i<num.length; i++){
prom = prom + num[i];
console.log(prom);
}
console.log(`el promedio de los numeros es de ${prom/8}`);

// signo zodiacal ingrear mes y dia
let mes = prompt(`ingrese el mes de su nacimiento `)
let dia = prompt(`ingrese el dia de su nacimiento`)
var zodiaco = ['Capricornio', 'Acuario', 'Picis', 'Aries', 'Tauro', 'Geminis', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Escorpio','Sagitario'];
if(mes == 11 && dia >22 || mes == 12 && dia <22){
    console.log(`Tu signo es ${zodiaco[11]}`);
}
if(mes == 1 && dia <22 || mes == 12 && dia >21){
    console.log(`Tu signo es ${zodiaco[0]}`);
}
if(mes == 1 && dia >21 || mes == 2 && dia <19){
    console.log(`Tu signo es ${zodiaco[1]}`);
}
if(mes == 3 && dia <24 || mes == 2 && dia >19){
    console.log(`Tu signo es ${zodiaco[2]}`);
}
if(mes == 3 && dia >23 || mes == 4 && dia <22){
    console.log(`Tu signo es ${zodiaco[3]}`);
}
if(mes == 5 && dia <22 || mes == 4 && dia >21){
    console.log(`Tu signo es ${zodiaco[4]}`);
}
if(mes == 5 && dia >21 || mes == 6 && dia <22){
    console.log(`Tu signo es ${zodiaco[5]}`);
}
if(mes == 6 && dia >21 || mes == 7 && dia <22){
    console.log(`Tu signo es ${zodiaco[6]}`);
}
if(mes == 7 && dia >21 || mes == 8 && dia <24){
    console.log(`Tu signo es ${zodiaco[7]}`);
}
if(mes == 8 && dia >22 || mes == 9 && dia <22){
    console.log(`Tu signo es ${zodiaco[8]}`);
}
if(mes == 9 && dia >21 || mes == 10 && dia <22){
    console.log(`Tu signo es ${zodiaco[9]}`);
}
if(mes == 10 && dia >21 || mes == 11 && dia <23){
    console.log(`Tu signo es ${zodiaco[9]}`);
}
if(mes == 11 && dia >22 || mes == 12 && dia <22){
    console.log(`Tu signo es ${zodiaco[11]}`);
}

//imprimir los nombres y dias del año
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let mes= 1;
let dia =1;
while (mes < 13) {
    while (dia <= 31) {

        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
            if(mes == 1){
                console.log(`mes: ${meses[0]} dia: ${dia}`)
            }
            if(mes == 3){
                console.log(`mes: ${meses[2]} dia: ${dia}`)
            }
            if(mes == 5){
                console.log(`mes: ${meses[4]} dia: ${dia}`)
            }
            if(mes == 7){
                console.log(`mes: ${meses[6]} dia: ${dia}`)
            }
            if(mes == 8){
                console.log(`mes: ${meses[7]} dia: ${dia}`)
            }
            if(mes == 10){
                console.log(`mes: ${meses[9]} dia: ${dia}`)
            }
            if(mes == 12){
                console.log(`mes: ${meses[11]} dia: ${dia}`)
            }
            
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            if(mes == 4){
                console.log(`mes: ${meses[3]} dia: ${dia}`)
                if (dia == 30) {
                    break;
                }
            }
            if(mes == 6){
                console.log(`mes: ${meses[5]} dia: ${dia}`)
                if (dia == 30) {
                    break;
                }
            }
            if(mes == 9){
                console.log(`mes: ${meses[8]} dia: ${dia}`)
                if (dia == 30) {
                    break;
                }
            }
            if(mes == 11){
                console.log(`mes: ${meses[10]} dia: ${dia}`)
                if (dia == 30) {
                    break;
                }
            }
           
            
        } else {
            console.log(`mes: ${meses[1]} dia: ${dia}`);
            if (dia == 28) {
                break;
            }
        }
        dia++;
    }
    dia = 1;
    mes++;
}
//array del 1 al 30 sacar los numeros primos
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
for(let i = 0; i<numeros.length; i++){
    if(numeros[i]%2!=0){
        console.log(numeros[i]);
    }
}
//dos array del 1 al 14 y del 11 al 20 imprimir los que se repiten
var a1= [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var a2 = [11,12,13,14,15,16,17,18,19,20];
for(let i = 0; i<a1.length; i++){
        for(let a = 0; a< a2.length; a++)
        {
            if(a1[i]==a2[a]){
                console.log(a2[a])
            }
        }
}

//dos array del 1 al 14 y del 11 al 20 imprimir los que no se repiten
var a1= [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var a2 = [11,12,13,14,15,16,17,18,19,20];


for(let i = 0; i<a1.length; i++){
    let contar = 0;
        for(let a = 0; a< a2.length; a++)
        {
            if(a1[i]==a2[a]){
                contar++;
            }
        }
    if(contar==0){
        console.log(a1[i])
    }
}

for(let i = 0; i<a2.length; i++){
    let contar = 0;
        for(let a = 0; a<a1.length; a++){
            if(a2[i]==a1[a])
            {
                contar++;
            }
        }
    if(contar == 0){
        console.log(a2[i])
    }
}