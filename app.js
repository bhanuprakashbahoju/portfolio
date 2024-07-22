const path = document.querySelectorAll("#logo path");

for (i = 0; i < 13; i++) {
  console.log(`for letter ${i + 1} length is ${path[i].getTotalLength()}`);
}
