comparacion = (num1,num2) => {
    if (num1>num2){
        numMayor =  num1;
    } else {
        numMayor = num2;
    }

    return "El número mayor es : " + numMayor;
}

console.log(comparacion(5,3));
console.log(comparacion(3,5));