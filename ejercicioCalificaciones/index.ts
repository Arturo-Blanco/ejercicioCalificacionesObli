let alumno: string = String(prompt("Ingrese nombre alumno"));
let nota1: number = Number(prompt("Ingrese nota practica"));
let nota2: number = Number(prompt("Ingrese nota problemas"));
let nota3: number = Number(prompt("Ingrese nota teorica"));
let condicion = nota1 <= 10 && nota2 <= 10 && nota3 <= 10;
let notaTotal: number = 0;

while (alumno !== "") {
  if (condicion === true) {
    notaTotal = Number(nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4);
    console.log("La nota final de: " + alumno + " es " + notaTotal);
    break;
  } else {
    console.log("Error en la carga de datos");
    break;
  }
}
