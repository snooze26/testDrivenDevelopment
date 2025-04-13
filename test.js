// retrieving the functions
import { upperCase } from './upperCase.js';
import { reverseReverse } from './reverseReverse.js';
import { Calculator  } from './calculator.js';
import { ceaserCypher } from './ceasarCypher.js';
import { analyzeArray } from './analyzeArray.js';

// test('Capatlizes the string' , () => {
//     expect(upperCase('abcdefg')).toBe('ABCDEFG');
// })

// test('Reverses the string', () => {
//     expect(reverseReverse('12345')).toBe('54321')
// })

// test('1 + 1 = 2' , () => { 
//     expect(Calculator.add(1 , 1)).toBe(2);
// })

// test('2 -1 = 1' , () => { 
//     expect(Calculator.sub(2 , 1)).toBe(1);
// })

// test('2 * 5 = 10' , () => { 
//     expect(Calculator.times(2 , 5)).toBe(10);
// })

// test('10 / 2 = 5' , () => { 
//     expect(Calculator.divide(10 , 2 )).toBe(5);
// })

// test('The expected answer is abc' , () => { 
//     expect(ceaserCypher("xyz ", 3)).toBe("abc ");
// })

// test('The expected answer is a b c' , () => { 
//     expect(ceaserCypher("x y z ", 3)).toBe("a b c ");
// })



test('Average value is 11' , () => { 
    const testArray = [1 , 2 , 3 , 6 , 11, 44,]
    const analyzedArray = analyzeArray(testArray);

    expect(analyzedArray.average).toBe(11);
});

test('Min value is 1' , () => { 
    const testArray = [1 , 2 , 3 , 6 , 11, 44,]
    const analyzedArray = analyzeArray(testArray);

    expect(analyzedArray.min).toBe(1);
});

test('Max value is 44' , () => { 
    const testArray = [1 , 2 , 3 , 6 , 11, 44,]
    const analyzedArray = analyzeArray(testArray);

    expect(analyzedArray.max).toBe(44);
});

test('Length is 6' , () => { 
    const testArray = [1 , 2 , 3 , 6 , 11, 44,]
    const analyzedArray = analyzeArray(testArray);

    expect(analyzedArray.length).toBe(6);
});

