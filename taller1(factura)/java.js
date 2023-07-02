console.log("mercado la empresa");
alert("factura de compras la empresa");
console.log("factura de venta n.01");
let nombre=prompt("ingrese el nombre del cliente");
let prod1=prompt("ingrese el nombre del primer prodcuto");
let pre1=prompt("ingrese el valor del primer producto");
let prod2=prompt("ingrese el nombre del segundo prodcuto");
let pre2=prompt("ingrese el valor del segundo producto");
let prod3=prompt("ingrese el nombre del tercer prodcuto");
let pre3=prompt("ingrese el valor del tercer producto");
let prod4=prompt("ingrese el nombre del cuarto prodcuto");
let pre4=prompt("ingrese el valor del cuarto producto");
let resultado= Number.parseInt (pre1)+ Number.parseInt (pre2)+  Number.parseInt (pre3)+  Number.parseInt (pre4);
let iva=resultado*0.19;
let descuento=resultado*0.10;
let pagofin=resultado+iva-descuento;
console.log(`${prod1}`+`${pre1}`);
console.log(`${prod2}`+`${pre2}`);
console.log(`${prod3}`+`${pre3}`);
console.log(`${prod4}`+`${pre4}`);
console.log(`-------------------------`);
console.log(`el subtotal de la factura es   `+`${resultado}` );
console.log(`el iva de la factura es  `+`${iva}` );
console.log(`el descuento de la factura es   `+`${descuento}` );
console.log(`el total de la factura es  `+`${pagofin}` );





console.log("el total a pagar del señor, "+`${nombre}`+" es de, "+`${pagofin}` );
console.log(`-------------------------`);



