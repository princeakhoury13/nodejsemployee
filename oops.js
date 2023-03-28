class EmployeePayRollData{
    id;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    toString(){
        return "id = "+this.id + " | Name: "+this.name + " | Salary: "+this.salary;
    }
}

let employeePayRollData= new EmployeePayRollData(1, "Prince", 150000);
console.log(employeePayRollData.toString());