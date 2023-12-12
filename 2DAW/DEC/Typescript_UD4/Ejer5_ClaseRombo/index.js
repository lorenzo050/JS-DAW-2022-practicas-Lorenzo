var Rombo = /** @class */ (function () {
    function Rombo(DiagonalH, DiagonalV) {
        this.DiagonalH = DiagonalH;
        this.DiagonalV = DiagonalV;
    }
    Rombo.prototype.calcularArea = function () {
        return (this.DiagonalH * this.DiagonalV);
    };
    return Rombo;
}());
var rombo1 = new Rombo(7, 5);
console.log(rombo1.calcularArea());
var rombo1 = new Rombo(8, 5);
console.log(rombo1.calcularArea());
