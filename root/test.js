//get the function 
const upperCase = require('./upperCase');

test('Capatlizes the string' , () => {
    expect(upperCase('abcdefg').toBe('ABCDEFG'));
})