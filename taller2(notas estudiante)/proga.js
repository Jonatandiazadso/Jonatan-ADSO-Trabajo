console.log("notas de tres estudiantes");
console.log(`-------------------------`);
let est1=prompt("ingrese el nombre del primer estudiante");
let est1nota1=prompt("ingrese la primera nota del primer estudiante");
let est1nota2=prompt("ingrese la segunda nota del primer estudiante");
let est1nota3=prompt("ingrese la tercera nota del primer estudiante");
let est2=prompt("ingrese el nombre del segundo estudiante");
let est2nota1=prompt("ingrese la primera nota del segundo estudiante");
let est2nota2=prompt("ingrese la segunda nota del segundo estudiante");
let est2nota3=prompt("ingrese la tercera nota del segundo estudiante");
let est3=prompt("ingrese el nombre del tercer estudiante ");
let est3nota1=prompt("ingrese la primera nota del tercer estudiante");
let est3nota2=prompt("ingrese la segunda nota del tercer estudiante");
let est3nota3=prompt("ingrese la tercera nota del tercer estudiante");
let nota1est1=Number.parseFloat (est1nota1)*0.20;
let nota2est1=Number.parseFloat (est1nota2)*0.20;
let nota3est1=Number.parseFloat (est1nota3)*0.60;
console.log("aqui estan las notas del primer estudiante con su valor  "+`${est1}`+"  ,  "+`${nota1est1}`+"/ "+`${nota2est1}`+"/ "+`${nota3est1}`)
let notaf1=nota1est1+nota2est1+nota3est1;
console.log("aqui su nota definitiva  . "+`${notaf1}`)
console.log(`-------------------------`);
let nota1est2=Number.parseFloat (est2nota1)*0.20;
let nota2est2=Number.parseFloat (est2nota2)*0.20;
let nota3est2=Number.parseFloat (est2nota3)*0.60;
console.log("aqui estan las notas del segundo estudiante con su valor  "+`${est2}`+"  ,  "+`${nota1est2}`+"/ "+`${nota2est2}`+"/ "+`${nota3est2}`)
let notaf2=nota1est2+nota2est2+nota3est2;
console.log("aqui su nota definitiva  . "+`${notaf2}`)
console.log(`-------------------------`);

let nota1est3=Number.parseFloat (est3nota1)*0.20;
let nota2est3=Number.parseFloat (est3nota2)*0.20;
let nota3est3=Number.parseFloat (est3nota3)*0.60;
console.log("aqui estan las notas del primer estudiante con su valor  "+`${est3}`+"  ,  "+`${nota1est3}`+"/ "+`${nota2est3}`+"/ "+`${nota3est3}`)
let notaf3=nota1est3+nota2est3+nota3est3;
console.log("aqui su nota definitiva  . "+`${notaf3}`)






