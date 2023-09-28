numError = 0;
sumCommitCorrecto = 0;
sumCommitErroneo = 0;

for (let index = 0; index < 10; index++) {
  console.log("Enviando commit " + (index + 1));
  try {
    numError = Math.random() * 100;
    if (numError > 30) {
      sumCommitCorrecto += 1;
     // console.log("error");
    } else {
      throw error;
    }
  } catch (error) {
    sumCommitErroneo +=1;
   // console.log("error");
  }
}

console.log("Total commits enviados: 10");
console.log("Commits correctos: " + sumCommitCorrecto);
console.log("Commits correctos: " + sumCommitErroneo);
