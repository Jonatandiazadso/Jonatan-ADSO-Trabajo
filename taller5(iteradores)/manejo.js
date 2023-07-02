const tume=[
  {nombreTutor:"alex",años_tutor:22,nombre_menor:"alixito",años_menor:15},
  {nombreTutor:"maria",años_tutor:22,nombre_menor:"marita",años_menor:15},
]

for (let i = 0; i < tume.length; i++) {
  console.table({
      "nombreTutor": tume[i].nombreTutor,
      "nombre_menor": tume[i].nombre_menor
  });
}