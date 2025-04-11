// retrieving the functions
import { upperCase } from './upperCase.js';
import { reverseReverse } from './reverseReverse.js';
test('Capatlizes the string' , () => {
    expect(upperCase('abcdefg')).toBe('ABCDEFG');
})

test('Reverses the string', () => {
    expect(reverseReverse('12345')).toBe('54321')
})

test('1 + 1 = 2' , () => { 
    expect(sum(1+1)).toBe(2);
})

test('2 -1 = 1' , () => { 
    expect(sub(2-1)).toBe(1);
})

test('2 * 5 = 10' , () => { 
    expect(times(2*5)).toBe(10);
})

test('10 / 2 = 5' , () => { 
    expect(times(10 / 2 )).toBe(5);
})