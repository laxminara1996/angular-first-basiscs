

export class myComponenent{
    id:number=123;
    getsquareValue(num:number):number{
        return num*num;
    }
}
enum myenum{
    PER_UNIT=100
}
interface IBill{
    calculateEBillAmount(nou:number):number;
}

class ElectricBillComponent implements IBill{
eunit:number=myenum.PER_UNIT;
calculateEBillAmount(nou:number):number{
    return this.eunit*nou;
}
}

class waterBillComponent implements IBill {
    wunit:number=5;
    calculateEBillAmount(nou: number): number {
        return this.wunit*nou;
    }
}
var ebill = new ElectricBillComponent();
console.log('ebill amount :'+ebill.calculateEBillAmount(10));