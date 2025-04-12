import { error } from "node:console";

export function ceaserCypher(string, shiftNum) { 
    //check if string is string and shift number is a number 
    if(typeof string !== "string") return console.error("Need to enter a valid string");
    if(typeof shiftNum !== "number") return console.error("Need to enter a valid number for the shift");
    
// create empty result array
    let res = [];
// FOR each character in "string" get the ASCAII code of that character 
    for(let i = 0; i < string.length; i+= 1) {
        const asciiChar = string.charCodeAt(i);
        console.log("ASCII CHAR BEFORE IF STATEMENT0" , asciiChar)
        // IF the character is NOT a letter (not in a-z or A-Z)
        if(
            !(asciiChar >= 97 && asciiChar <= 122) || (asciiChar >= 65 && asciiChar <= 90)) {
                // add the character as-is to result this is so we don't manipulate values such as spaces, "!", "-", etc.
                res.push(asciiChar);
                // Contintue to the next character 
                console.log(res);
                continue; 
            }
        

    // add shiftNum to the ASCII code and store as the cryptedChar WHY?

    // IF the character is lowercase AND cryptedChar is beyond 'z' 
        //wrap it back by subtracting 26 from the cryptedChar

    // ELSE IF THE character is uppercase AND cryptedChar is beyond "Z"
        //wrap it back by subtracting 26 from cryptedChar

    // CONVERT the cryptedChar back to a character 
    // Add it to the result array 
    }


    // end for loop

    //RETURN all characters in result merged as a string 
}

const testCode = ceaserCypher("b", 5);
console.log(testCode);


        

