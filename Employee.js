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
function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HR;
}

const findTotal = (totalVal, dailyVal)=>{
    return totalVal+dailyVal;
}

let counnt=0;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays=0;

let empDailyWageArray = new Array();

let empMap = new Map();



while(totalEmpHrs<=MAX_HRS && totalWorkingDays<NUMBER_WORKING_DAYS)
{
    totalWorkingDays++;
    let emp_check = Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHours(emp_check);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(
        {
            dayNum: totalWorkingDays,
            dayHours:empHrs,
            dailyWage:calculateDailyWage(empHrs),
            toString(){
                return '\nDay'+this.dayNum+'=> Working hr is '+ this.dayHours+'and wage earned: '+this.dailyWage
            }
        });
        
        empMap.set(totalWorkingDays,empHrs)
        
    
}

let totalHrs = Array.from(empMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArray.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

console.log("uc9 " + totalHrs + " : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays= new Array();
let fullWorkingDays = new Array();

empMap.forEach( (value, key, map)=> {
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else if(value==0) nonWorkingDays.push(key); 
});

console.log(fullWorkingDays);
console.log(partWorkingDays);
console.log(nonWorkingDays);

console.log(empMap);

let empWage = calculateDailyWage(totalEmpHrs);
console.log("Wage for the month: "+empWage);