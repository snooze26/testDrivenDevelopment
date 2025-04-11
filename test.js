//get the function 
import { upperCase } from './upperCase.js';

test('Capatlizes the string' , () => {
    expect(upperCase('abcdefg')).toBe('ABCDEFG');
})

test('Reverses the string', () => {
    expect(reverseReverse('12345')).toBe('54321')
})