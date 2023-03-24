const IS_ABSENT =0;

const Is_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;

let empHrs = 0;


let emp_check = Math.floor(Math.random()*10)%3;

switch(emp_check){
    case Is_PART_TIME:
        empHrs = PART_TIME_HR;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HR;
        break;
    default:
        empHrs=0;    
}

let empWage = empHrs * WAGE_PER_HR;
console.log("Wage :"+empWage);