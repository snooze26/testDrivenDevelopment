//get the function 
import { upperCase } from './upperCase.js';

test('Capatlizes the string' , () => {
    expect(upperCase('abcdefg')).toBe('ABCDEFG');
})