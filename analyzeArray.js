
export function analyzeArray(array) { 
    const min = Math.min(...array);
    const max = Math.max(...array);

    console.log(max);
    return max
}

const testArray = [1 , 2 , 3 , 6 , 11, 44,]
const min = analyzeArray(testArray);
// console.log(min)