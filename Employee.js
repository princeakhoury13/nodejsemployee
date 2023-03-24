const IS_ABSENT =0;

const Is_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUMBER_WORKING_DAYS = 10;
const MAX_HRS = 100;







function getWorkingHours(emp_check){
    switch(emp_check){
        case Is_PART_TIME:
            return PART_TIME_HR;
            
        case IS_FULL_TIME:
            return FULL_TIME_HR;
            
        default:
            return 0;    
    }
}

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays=0;

while(totalEmpHrs<=MAX_HRS && totalWorkingDays<NUMBER_WORKING_DAYS)
{
    totalWorkingDays++;
    let emp_check = Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(emp_check);
}




let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Wage for the month: "+empWage);