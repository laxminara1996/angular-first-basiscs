
class person{
    pid:number;
    name:string;
    constructor(pid:number,name:string){
        this.pid=pid;
        this.name=name;

    }
     displayPersonInfo():void{
        console.log('id :'+this.pid);
        console.log('name :'+this.name);
     }
}

class employees extends person{
    //properties
salary:number;

constructor(pid:number,name:string,salary:number){
    super(pid,name);
    
}

//method
 public displayEmpInfo():void{
super.displayPersonInfo();
console.log('salary :'+this.salary);
}
}