/*2000 - Dragón
2001 - Serpiente
2002 - Caballo
2003 - Oveja
2004 - Mono
2005 - Gallo
2006 - Perro
2007 - Cerdo
2008 - Rata
2009 - Buey
2010 - Tigre
2011 - Liebre
*/


var año = parseInt(prompt("Coloque su año de nacimiento para saber su signo del zodiaco"));

var horoscopo="";
   
        var resto = año % 12;
        switch (resto) {
            case 0: 
            	horoscopo = "Mono"; 
            break;
            case 1: 
            	horoscopo = "Gallo"; 
            break;
            case 2: 
            	horoscopo = "Perro"; 
            break;
            case 3: 
            	horoscopo = "Cerdo";
            break;
            case 4: 
            	horoscopo = "Rata"; 
            break;
            case 5: 
            	horoscopo = "Buey"; 
            break;
            case 6: 
            	horoscopo = "Tigre"; 
            break;
            case 7: 
            	horoscopo = "Liebre"; 
            break;
            case 8: 
            	horoscopo = "Dragon"; 
            break;
            case 9:
            	horoscopo = "Serpiente"; 
            break;
            case 10: 
            	horoscopo = "Caballo"; 
            break;
            case 11: 
            	horoscopo = "Oveja"; 
            break;
        }
alert("Tu signo es : " + horoscopo);