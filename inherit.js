var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(pid, name) {
        this.pid = pid;
        this.name = name;
    }
    person.prototype.displayPersonInfo = function () {
        console.log('id :' + this.pid);
        console.log('name :' + this.name);
    };
    return person;
}());
var employees = /** @class */ (function (_super) {
    __extends(employees, _super);
    function employees(pid, name, salary) {
        return _super.call(this, pid, name) || this;
    }
    //method
    employees.prototype.displayEmpInfo = function () {
        _super.prototype.displayPersonInfo.call(this);
        console.log('salary :' + this.salary);
    };
    return employees;
}(person));
