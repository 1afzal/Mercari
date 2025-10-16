function getMaxGrades(prev,next){
    return Math.max(prev,next)
}
const grades = [10,20,3]
const maxgrade = grades.reduce(getMaxGrades)
console.log(maxgrade)