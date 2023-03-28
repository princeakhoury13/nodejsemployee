class EmployeePayRollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate=params[4];
    }

    get name(){
        return this._name;
    }

    set name(name){
        let nameregex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameregex.test(name))
        this._name = name;
        else
        throw 'Name is incorrect';
    }

    toString(){
        return "id = "+this.id + " | Name: "+this.name + " | Salary: "+this.salary +" | Gender: "+this.gender + " | Start Date: "+this.startDate;
    }
}

let employeePayRollData= new EmployeePayRollData(1, "Prince", 150000, "Male",new Date());
console.log(employeePayRollData.toString());

try{
    employeePayRollData.name = "John";
    console.log(employeePayRollData.toString());
}
catch(e){
    console.log(e);
}