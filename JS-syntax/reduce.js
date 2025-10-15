const expense = [12,225,454,77,82,64,46,94];

function calc(prev,next){
    return prev + next;
}

const total = expense.reduce(calc)
console.log(total);
