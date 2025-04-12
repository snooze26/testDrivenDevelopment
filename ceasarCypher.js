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
        // IF the character is NOT a letter (not in a-z or A-Z)
        if(
            !(asciiChar >= 97 && asciiChar <= 122) && !(asciiChar >= 65 && asciiChar <= 90)) {
                // add the character as-is to result this is so we don't manipulate values such as spaces, "!", "-", etc.
                res.push(asciiChar);
                // Contintue to the next character 
                continue; 
            }

        // add shiftNum to the ASCII code and store as the cryptedChar . this is my shift and create the new character 
        let cryptedChar = shiftNum + asciiChar; 
        console.log(cryptedChar);
    // IF the character is lowercase AND cryptedChar is beyond 'z' 
        if((cryptedChar > 122 && asciiChar >= 97 && asciiChar <= 122 ) ||
           (cryptedChar > 90 && asciiChar >= 65 && asciiChar <= 90)) {
                //wrap it back by subtracting 26 from the cryptedChar
                cryptedChar -= 26; 
                console.log(cryptedChar); 
            }
            res.push(String.fromCharCode(cryptedChar));
        
    // ELSE IF THE character is uppercase AND cryptedChar is beyond "Z"
        //wrap it back by subtracting 26 from cryptedChar

    // CONVERT the cryptedChar back to a character 
   // Add it to the result array 
    }
    //RETURN all characters in result merged as a string 
    return res.join("");

    // end for loop
}

const testCode = ceaserCypher("XYZ", 3);
console.log(testCode);


        

