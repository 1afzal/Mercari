const Ages=[18,22,84,23,17,12,56];

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

const oldEnough = Ages.filter(isAdult);
console.log(oldEnough);

const notOldEnough = Ages.filter(isChild);
console.log(notOldEnough);