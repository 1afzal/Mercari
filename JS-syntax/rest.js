// ...rest operator.
function sum(...nums){
    let res = 0 ;
    for(let num of nums){
        res+= num;
    }
    return res;
}

const total = sum(1,2,3);
console.log(total);