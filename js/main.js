const notasAlumno = [9, 6, 3, 9];
let sumadorNotas = 0;
for(let posicion =0; posicion <4; posicion++) {
    sumadorNotas = sumadorNotas + notasAlumno[posicion];
}
const promedio = sumadorNotas /4;
console.log(promedio); 

if(promedio > 6) {
    console.log("Aprobaste")
} 
else { 
    console.log("No aprobaste, para la proxima estudia mas") 
}
