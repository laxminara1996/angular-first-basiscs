"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfacetest_1 = require("./interfacetest");
var uid = 105;
var uname = 'rani';
var status1 = true;
console.log('id:' + uid);
console.log('id:' + uname);
console.log('id:' + status1);
var data;
data = 10;
console.log(data);
data = "laxmi";
console.log(data);
data = true;
console.log(data);
var address = /** @class */ (function () {
    function address(street, city, state) {
        this.street = street;
        this.city = city;
        this.state = state;
    }
    return address;
}());
var employees = /** @class */ (function () {
    function employees(id, name, salary, address) {
        console.log('object i created..');
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
    //method
    employees.prototype.displayEmpInfo = function () {
        console.log('id :' + this.id);
        console.log('name :' + this.name);
        console.log('salary :' + this.salary);
        console.log("---------------------");
        console.log('street:' + this.address.street);
        console.log('street:' + this.address.city);
        console.log('street:' + this.address.state);
    };
    return employees;
}());
// create object
var add = new address("oc", "tdp", "ap");
var add1 = new address("oc", "spl", "ap");
var emps = new employees(101, "hon", 490, add);
var emps1 = new employees(103, "rahul", 340, add1);
emps.displayEmpInfo();
emps1.displayEmpInfo();
console.log(emps);
console.log(emps1);
var emp = {
    id: 111,
    name: "raju",
    salary: 1000,
};
console.log(emp);
var component = new interfacetest_1.myComponenent();
console.log(component.id);
