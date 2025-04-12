export function ceaserCypher(string, shiftNum) { 

// create empty result array
    let res = [] 
// FOR each character in "string" get the ASCII code of that character 
    for(let i = 0; i < string.length; i+= 1){
        const asciiChar = string.charCodeAt(i);
        console.log(asciiChar);
        // IF the character is NOT a letter (not in a-z or A-Z)
        
        // add the character as-is to result - WHY?  
        // Contintue to the next character 

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

const testCode = ceaserCypher("A", 1);
console.log(testCode);


        

