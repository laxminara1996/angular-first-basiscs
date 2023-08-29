import { myComponenent } from './interfacetest';

var uid:number=105;
var uname:string='rani';
var status1:boolean=true;
console.log('id:'+uid);
console.log('id:'+uname);
console.log('id:'+status1);
var data:any;
data=10;
console.log(data);
data="laxmi";
console.log(data);
data=true;
console.log(data);
class address{
street:String;
city:string;
state:string;
constructor(street:String,city:string,state:string){
this.street=street;
this.city=city;
this.state=state;
    }
}
class employees{
    //properties
id:number;
name:String;
salary:number;
address:address;
constructor(id:number,name:String,salary:number,address:address){
    console.log('object i created..');
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.address = address;
}

//method
displayEmpInfo():void{
console.log('id :'+this.id);
console.log('name :'+this.name);
console.log('salary :'+this.salary);
console.log("---------------------");
console.log('street:'+this.address.street);
console.log('street:'+this.address.city);
console.log('street:'+this.address.state);

}
}
// create object
var add = new address("oc","tdp","ap");

var add1 = new address("oc","spl","ap");

var emps = new employees(101,"hon",490,add);
var emps1 = new employees(103,"rahul",340,add1);
emps.displayEmpInfo();
emps1.displayEmpInfo();
console.log(emps);
console.log(emps1);

var emp= {
    id:111,
    name:"raju",
    salary:1000,
    
};
console.log( emp);

var component =  new myComponenent();
console.log(component.id);
 export{}
