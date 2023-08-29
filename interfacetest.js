"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myComponenent = void 0;
var myComponenent = /** @class */ (function () {
    function myComponenent() {
        this.id = 123;
    }
    myComponenent.prototype.getsquareValue = function (num) {
        return num * num;
    };
    return myComponenent;
}());
exports.myComponenent = myComponenent;
var myenum;
(function (myenum) {
    myenum[myenum["PER_UNIT"] = 100] = "PER_UNIT";
})(myenum || (myenum = {}));
var ElectricBillComponent = /** @class */ (function () {
    function ElectricBillComponent() {
        this.eunit = myenum.PER_UNIT;
    }
    ElectricBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eunit * nou;
    };
    return ElectricBillComponent;
}());
var waterBillComponent = /** @class */ (function () {
    function waterBillComponent() {
        this.wunit = 5;
    }
    waterBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.wunit * nou;
    };
    return waterBillComponent;
}());
var ebill = new ElectricBillComponent();
console.log('ebill amount :' + ebill.calculateEBillAmount(10));
