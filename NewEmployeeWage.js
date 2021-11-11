//UC1

{const Is_Absent = 0
    let empcheck = Math.floor(Math.random()*10)%2;
    if(empcheck == Is_Absent)
    {
       // console.log("UC1 Employee is Absent");
    }
    else
    {
        //console.log("Employee is Present");
    }
}

// UC2
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOURS = 20;

// let empHrs = 0;
// let empCheck = Math.floor(Math.random()*10)%3;
// switch (empCheck){

//     case IS_PART_TIME:
//         empHrs = PART_TIME_HOURS;
//     case IS_FULL_TIME:
//         empHrs = FULL_TIME_HOURS;
//     default:
//         empHrs = 0;
// }
// let empWage = empHrs * WAGE_PER_HOURS;
// console.log("UC2 - EmpWage: "+ empWage);


// UC3
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOURS = 20;
// function getWorkingHours(empCheck){
//     switch (empCheck){
//         case IS_PART_TIME:
//             return PART_TIME_HOURS;
//         case IS_FULL_TIME:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;  
//     }
// }

// let empCheck = Math.floor(Math.random()*10)%3;
// let empHrs = getWorkingHours(empCheck);
// let empWage = empHrs * WAGE_PER_HOURS;
// console.log("UC3 Emp Wage: "+ empWage);


// UC4
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOURS = 20;
// const NUM_OF_WORKING_DAYS = 20;
// function getWorkingHours(empCheck){
//     switch (empCheck){
//         case IS_PART_TIME:
//             return PART_TIME_HOURS;
//         case IS_FULL_TIME:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;  
//     }
// }

// let totalEmpHrs = 0;
// for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
//     let empCheck = Math.floor(Math.random() *10)%3;
//     totalEmpHrs += getWorkingHours(empCheck);
// }
// let empWage = totalEmpHrs * WAGE_PER_HOURS;
// console.log("Hours "+totalEmpHrs +" Emp Wage: "+ empWage);


// UC5
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOURS = 20;
// const NUM_OF_WORKING_DAYS = 20;
// const MAX_HRS_IN_MONTH =160;
// function getWorkingHours(empCheck){
//     switch (empCheck){
//         case IS_PART_TIME:
//             return PART_TIME_HOURS;
//         case IS_FULL_TIME:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;  
//     }
// }

// let totalEmpHrs = 0;
// let totalWorkingDays = 0;
// while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
//     totalWorkingDays++ ;
//     let empCheck = Math.floor(Math.random()*10)%3;
//     totalEmpHrs += getWorkingHours(empCheck);
// }
// let empWage = totalEmpHrs * WAGE_PER_HOURS;
// console.log("Total Days: "+totalWorkingDays+" Hours "+totalEmpHrs +" Emp Wage: "+ empWage);


//UC6
// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOURS = 20;
// const NUM_OF_WORKING_DAYS = 20;
// const MAX_HRS_IN_MONTH =160;
// function getWorkingHours(empCheck){
//     switch (empCheck){
//         case IS_PART_TIME:
//             return PART_TIME_HOURS;
//         case IS_FULL_TIME:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;  
//     }
// }

// function calcDailyWage(empHrs){
//     return empHrs * WAGE_PER_HOURS;
// }

// let totalEmpHrs = 0;
// let totalWorkingDays = 0;
// let empDailyWageArr = new Array();
// while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
//     totalWorkingDays++ ;
//     let empCheck = Math.floor(Math.random()*10)%3;
//     let empHrs = getWorkingHours(empCheck);
//     totalEmpHrs += empHrs;
//     empDailyWageArr.push(calcDailyWage(empHrs));
// }
// let empWage = calcDailyWage(totalEmpHrs);
// console.log("Total Days: "+totalWorkingDays+" Hours "+totalEmpHrs +" Emp Wage: "+ empWage);


// UC8
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH =160;
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;  
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOURS;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++ ;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Total Days: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));