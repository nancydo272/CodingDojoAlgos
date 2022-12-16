//1. Remove Blanks 
//Create a function that, given a string, returns all of that string’s contents, 
//but without blanks. 
    //Examples:
    //removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
    //removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

    // function removeBlanks(string){
    //     var wordArray =string.split(" ");
    //     // console.log(wordArray); 
    //     var string = wordArray.join("");
    //     return string;
    // }
    // console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
    // console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));
    // //.split(" ") --> will split at every space
    // //.split("") --> will split at every character

//2. Get Digits
//Create a JavaScript function that given a string, returns the integer 
//made from the string’s digits. You are allowed to use isNaN() and Number().
    //Examples:
    //getDigits("abc8c0d1ngd0j0!8") => 801008
    //getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

    // function getDigits(string){
    //     var numberArray = string.split("");
    //     var newArray=[];
    //     // console.log(numberArray); 
    //     for(var i = 0; i<numberArray.length;i++){
    //         if(!isNaN(numberArray[i])){
    //             newArray[i]= numberArray[i]; 
    //         }  
    //     }
    //     console.log(newArray); 

    // }
    // getDigits("abc8c0d1ngd0j0!8");


    // Acronyms
    // Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
    //You are allowed to use .split() and .toUpperCase().
    // acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
    // acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
    function acronym(string){
        array = string.split(" ");
        // console.log(array.length);
        var ac = [];
        for(var i = 0; i<array.length; i++){
            // console.log(array[i][0])
            ac.push(array[i][0])
        }
        var newString = ac.join('').toUpperCase();
        return newString;
    }
    console.log(acronym(" there's no free lunch - gotta pay yer way. "));
    console.log(acronym("Live from New York, it's Saturday Night!"));
    
    // Count Non-Spaces
    // Create a function that, given a string, returns the number of non-space characters found in the string. 
    
    // Examples:
    
    // countNonSpaces("Honey pie, you are driving me crazy") => 29
    // countNonSpaces("Hello world !") => 11
    
    
    
    // Remove Shorter Strings
    // Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
    
    // Examples:
    
    // removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
    // removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']   