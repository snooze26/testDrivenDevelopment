
export function analyzeArray(array) { 
    const min = Math.min(...array);
    console.log(min)

    return min; 
}

const testArray = [1 , 2 , 3 , 6 , 11, 44,]
const min = analyzeArray(testArray);
// console.log(min)