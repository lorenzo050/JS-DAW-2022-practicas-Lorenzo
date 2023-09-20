//Encuentra el primer elemento que sea mayor a 50 del siguiente array de números: [23, 30, 8, 55, 79];  
//¿Y en el siguiente array? [23, 30, 8, 0, 10];

var array_num = new Array(23,30,8,55,79);
// array_num.find(i => i > 50);
console.log(array_num.find(i => i > 50));


var array2_num = new Array(23,30,8,0,10);
console.log(array2_num.find(i => i > 50));

