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
    // IF the character is lowercase AND cryptedChar is beyond 'z' 
        if((cryptedChar > 122 && asciiChar >= 97 && asciiChar <= 122 ) ||
           (cryptedChar > 90 && asciiChar >= 65 && asciiChar <= 90)) {
                //wrap it back by subtracting 26 from the cryptedChar
                cryptedChar -= 26; 
            }

        // CONVERT the cryptedChar back to a character and add it to the result array 
        res.push(String.fromCharCode(cryptedChar));
    }
    //RETURN all characters in result merged as a string 
    return res.join("");
}

// add a way turn the non aplhabetic characters back into their string formed. 

        

