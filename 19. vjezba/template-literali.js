const prviDio = "Danas";
const drugiDio = " mi ";
const treciDio = "ucimo.";

let rezString = prviDio + drugiDio + treciDio;
console.log(rezString);

rezString =
  "Sta danas radimo? " + prviDio + ", na kisni dan," + drugiDio + treciDio;

console.log(rezString);

rezString = `Sta danas radimo? ${prviDio}, na kisni dan,${drugiDio}${treciDio}`;

console.log(rezString);

const arr = ["Ivica", "Marica", "Anica", "Janica"];

for (let i = 0; i < arr.length; i++) {
  console.log(`Bok, ${arr[i]}`);
}
