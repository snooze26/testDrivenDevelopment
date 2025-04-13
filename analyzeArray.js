
export function analyzeArray(array) { 
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return length;
}

const testArray = [1 , 2 , 3 , 6 , 11, 44,]
const min = analyzeArray(testArray);
// console.log(min)