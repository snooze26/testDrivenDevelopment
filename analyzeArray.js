
export function analyzeArray(array) {
   
    const max = Math.max(...array);
    const min = Math.min(...array);
    const length = array.length;

    const average = (array) => {
        console.log(array);
        let ave = 0; 
        for(let i = 0; i < array.length; i++) {
            ave += array[i]; 
        }
        console.log(ave)
        return Math.floor(ave / array.length); 
    }
    // console.log(average(array));

    return {
        min,
        max,
        length,
        average : average(array)
    }
}
