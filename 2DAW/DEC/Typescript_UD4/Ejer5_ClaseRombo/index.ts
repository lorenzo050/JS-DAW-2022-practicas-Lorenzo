class Rombo {
    DiagonalH: number;
    DiagonalV: number;

    constructor(DiagonalH:number, DiagonalV:number) {
        this.DiagonalH = DiagonalH;
        this.DiagonalV = DiagonalV;
      }

     calcularArea(){
       return (this.DiagonalH * this.DiagonalV);
     } 
}

var rombo1 = new Rombo(7,5);
console.log(rombo1.calcularArea());

var rombo1 = new Rombo(8,5);
console.log(rombo1.calcularArea());