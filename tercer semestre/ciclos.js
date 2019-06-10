
//ejercicio uno parte 1 for
let salaro = 970;

for(let i = 1; i>-1; i++){
    salaro = salaro - 97;
    if(salaro<=0){
        console.log(`el total de dias fueron para acabar el salario fueron: ${i}`)
        break;
    }
    else{
        continue
    }
}

//ejercicio uno parte 2  While
let salari = 970;
let iu = 1;

while(iu>-1){
    salari = salari - 97;
    if(salari<=0){
        console.log(`el total de dias fueron para acabar el salario fueron: ${iu}`)
        break;
    }
    else{
        iu++
    }
}


//ejercicio uno parte 3 do While
let salario = 970;
let i = 1;

do{
    salario = salario - 97;
    if(salario<=0){
        console.log(`el total de dias fueron para acabar el salario fueron: ${i}`)
        break;
    }
    else{
        i++
    }
}while(i>-1)


//ejercicio 2 parte 1 for



for(let anios = 2000; anios<=2015; anios++){
if(anios%100!=0 && anios%4==0 || anios%400==0){
    console.log(`El año ${anios} es biciesto`);
}
}

console.log("-------------------------------------------------------")
//ejercicio 2 parte 2 while


let anio = 2000;

while(anio<=2015){
    if(anio%100!=0 && anio%4==0 || anio%400==0){
        console.log(`El año ${anio} es biciesto`);
    }
    anio++;
}


//ejercicio 2 parte 3 do while

console.log("-------------------------------------------------------")

let ani = 2000;

do{
    if(ani%100!=0 && ani%4==0 || ani%400==0){
        console.log(`El año ${ani} es biciesto`);
    }
    ani++;
}while(ani<=2015)


//valor del auto 5 años despues 15% de devaluacion por año 350 000 inicial parte for
let auto= 350000;
for(let i = 0; i<5; i++){
    auto = auto * 0.85;
}
console.log(`El valor final del auto devaluado es de ${auto}`)

//valor del auto 5 años despues 15% de devaluacion por año 350 000 inicial parte while

let auto1= 350000;
let ia = 0;
while( ia<5){
    auto1 = auto1 * 0.85;
    ia++
}
console.log(`El valor final del auto devaluado es de ${auto}`)

//valor del auto 5 años despues 15% de devaluacion por año 350 000 inicial parte do while

let auto2= 350000;
let i = 0;
do{
    auto2 = auto2 * 0.85;
    i++
}
while( i<5)
console.log(`El valor final del auto devaluado es de ${auto}`)



//promedio final empieza en 10 y baja 0.5 por semestre 8 semestres en total (parte For)


let calificaci=10;
let promed = 0;
for(let i = 0; i < 8; i++ ){
    if(i == 0){
        promed = calificaci;
        console.log(promed);
    }
    else{
        calificaci = calificaci - 0.5; 
        promed = promed + calificaci;       
        console.log(promed);
    }
}
console.log(`Tu promedio final es de total de ${promed/8}`);


//promedio final empieza en 10 y baja 0.5 por semestre 8 semestres en total (parte While)
console.log(`------------------Promedio (While)------------------`);
let calificacion=10;
let promedio = 0;
let i = 0; 
while(i < 8 ){
    if(i == 0){
        promedio = calificacion;
        console.log(promedio);
    }
    else{
        calificacion = calificacion - 0.5; 
        promedio = promedio + calificacion;       
        console.log(promedio);
    }
    i++;
}
console.log(`Tu promedio final es de total de ${promedio/8}`);

//promedio final empieza en 10 y baja 0.5 por semestre 8 semestres en total (parte do While)
console.log(`------------------Promedio (do While)------------------`);
let calificacio=10;
let promedi = 0;
let ia = 0; 
do{
    if(ia == 0){
        promedi = calificacio;
        console.log(promedi);
    }
    else{
        calificacio = calificacio - 0.5; 
        promedi = promedi + calificacio;       
        console.log(promedi);
    }
    ia++;
}

while(ia < 8 )
console.log(`Tu promedio final es de total de ${promedi/8}`);


//quince primeros de fibonacci (for)
let fun1 = 0;
let fun2 = 1;
let fibo = 0;
let a =[];

for(let i = 0; i<15; i++ ){
    
        fibo = fun1;
    
        fun1 = fun1 + fun2;
    
        fun2 = fibo;

        a.push(fun2);
    
        //console.log(fun2);
}
console.log(a);

//quince primeros de fibonacci (while)
let fu1 = 0;
let fu2 = 1;
let fio = 0;
let i = 0;
let ar =[];

while( i<15){
   
    fio = fu1;
    
        fu1 = fu1 + fu2;
    
        fu2 = fio;

        //console.log(fun2);

        ar.push(fu2);

        i++;
}

console.log(ar);

//quince primeros de fibonacci 
let func1 = 0;
let func2 = 1;
let fibon = 0;
let ia = 0;
let arr =[];
do{
        fibon = func1;
    
        func1 = func1 + func2;
    
        func2 = fibon;

        arr.push(func2);

        ia++;
}while( ia<15)

console.log(arr);