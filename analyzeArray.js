
export function analyzeArray(array) {
   //create property values 
    const max = Math.max(...array);
    const min = Math.min(...array);
    const length = array.length;

    const average = (array) => {
        let ave = 0; 
        for(let i = 0; i < array.length; i++) {
            ave += array[i]; 
        }
        // return average rounded
        return Math.floor(ave / array.length); 
    }
    // turn values into object and properties
    return {
        min,
        max,
        length,
        average : average(array)
    }
}
