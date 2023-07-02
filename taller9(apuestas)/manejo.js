let apos = 5000;
let pas;
alert(`Empieza con ${apos}`);

while (apos > 0 && apos < 10000) {
  let apo = parseInt(prompt("Ingrese cuánto apuesta"));

  if (apo > apos) {
    console.log("La apuesta es mayor que el saldo disponible. El juego ha terminado.");
    break;
  }

  let numero = parseInt(prompt("Ingrese el número"));

  let aleatorio = Math.round(Math.random() * 10 );

  if (numero === aleatorio) {
    let ret = apo * 3;
    let ret1 = apos + ret;
    console.log(`El número es ${aleatorio}, y ganaste ${ret}. Ahora tienes ${ret1}`);
    apos = ret1;
  } else {
    let ret = apos - apo;
    console.log(`El número es ${aleatorio}, y perdiste. Ahora tienes ${ret}`);
    apos = ret;
  }
}

if (apos === 0) {
  console.log("Has perdido todo tu dinero. El juego ha terminado.");
} else if (apos === 10000) {
  console.log("Has alcanzado los 10,000 puntos. ¡Felicidades! El juego ha terminado.");
}