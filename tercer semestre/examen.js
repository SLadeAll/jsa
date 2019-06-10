let cant = parseFloat( prompt(`ingrese la cantidad de numeros que estaran en la escalera`))
let esc = "";
let espacio = " ";
let cont = cant;
let a = "";
for(let i = 1; i<=cant; i++){
    a = ""
    for(let e = 0; e<cont; e++){
        a = a + espacio;
    }
    esc = i  + esc;
    cont--
    console.log(a+esc);
}
//--------------------------------------------
let letras = []
for(let i = 0; i<5; i++){
    letras.push( prompt(`ingrese la  letra ${i+1}`))
}
console.log(letras);
let invertir = arr =>{
    let letInver = ""
    for(let i = arr.length-1; i>=0; i--){
        letInver = letInver + arr[i];
    }
    return letInver
}

console.log(invertir(letras))
//------------------------------------------------
let numeros = []

for(let i = 0; i<5; i++){
    numeros.push(parseFloat( prompt(`ingrese un numero`)))
}
console.log(numeros)

let acomodo = numeros =>{


for(var i=1;i<numeros.length;i++)
		{
			for(var j=0;j<(numeros.length-i);j++)
			{
				if(numeros[j]>numeros[j+1])
				{
					k=numeros[j+1]
					numeros[j+1]=numeros[j]
					numeros[j]=k
				}
            }
        }
return numeros
    }
        console.log(acomodo(numeros))

let a  = ["u","a","i","j","k"]
a.reverse().join("")

