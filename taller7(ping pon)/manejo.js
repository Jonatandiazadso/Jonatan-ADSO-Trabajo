let numero=(prompt("ingrese el numero"));
console.log(numero);

if(numero%numero !==0)
{console.log("el no es entero")}

else { 

let i;

for (i=0; i<=numero; i ++){
  console.log(i);
if(i===0 )
{console.log("no es multiplode 3 ni de 5");
continue;
}
else if (i%3===0 && i%5===0 )
{console.log("PING PONG");
continue;
}

else if( i%3===0)

{console.log("PING")
}
else if( i%5===0)
{
    console.log("PONG")
}
else 
{
    console.log("NO ES MULTIPLO NI DE 3 NI DE 5")
}
}
}