const money = 150;
let food;
if (money > 100){
    food = 'biriyani';
}
else{
    food = 'alu vorta';
}

// ternary
// condition ? true value : false value
let food = money > 100 ? 'biiyani' : 'alu vorta';

// function call when alternative exists
const cssClass2 = active ? 'active' : 'inactive';
active ? displayUser() : hideUser()

// function call when alternative doesn't exist
active && displayUser()    // and
active || displayUser()    // or