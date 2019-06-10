var info = {
  name: "Oscar",
  lastname: "Javier",
  address: "Fco. Palacios JMNZ. 391 Alfredo V. Bonfil",
  town: "Villa de Alvarez",
  state: "Colima",
  PC: "28979",
  career: "Ing. en Software",
  semester: {
    first: {
      subjects: {
        fundamentosProgramacion: "10",
        etica: "8.7",
        fundamentosRedes: "8.6",
        matematicas: "8.2",
        sistemasOperativos: "8.1",
        ingenieriaSoftware: "9.1",
        ingles: "9.7"
      }
    },
    second: {
      subjects: {

        programacionObjetos: "9.3",
        sistemasDigitales: "7",
        serviciosInternet: "8",
        metodosNumericos: "6",
        desarrolloEmprendedor: "9.2",
        cicloDeVida: "8.4",
        ingles: "8.7"
      }
    },
    third: {
      subjects: {

        EstructuraComputadoras: "8.1",
        estucturaDeDatos: "9.8",
        baseDatos: "8",
        metodosNumericos: "6",
        Derecho: "9.2",
        matematicasDiscretas: "8.4",
        ingles: "8.7"
      }
    }
  }
}
console.log(info.semester.first.subjects.matematicas)
