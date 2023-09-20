//Encuentra el primer elemento que sea mayor a 50 del siguiente array de números: [23, 30, 8, 55, 79];  
//¿Y en el siguiente array? [23, 30, 8, 0, 10];

var array_num = new Array(23,30,8,55,79);
for (let index = 0; index < array_num.length; index++) {
    if (array_num[index] > 50) {
        const element = array_num[index];
        console.log(array_num[index]);
        return;
    }
}

var array2_num = new Array(23,30,8,0,10);
var nohayNum = new Boolean(false);
for (let index = 0; index < array2_num.length; index++) {
    if (array2_num[index] > 50) {
        const element = array2_num[index];
        console.log(array_num[index]);
        nohayNum = true;
        return;
    }
}

if (nohayNum) {
    console.log("No hay ningun numero mayor que 50");
}
