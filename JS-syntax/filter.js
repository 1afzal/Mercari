const Age = [11,18,22,18,19,54,17,13,70,23,90];

const checkAge = (element) => {
    return element >= 18;
};

const isOldEnough = Age.filter(checkAge);


console.log('Filtered (is old enough):', isOldEnough);


const checkIllegal=(element)=>{
    return element < 18;
}

const isNotOldEnough = Age.filter(checkIllegal);

console.log(isNotOldEnough);