// var funString = 'Mimi is dancing on the coffee table'; 
// var oneChar = funString[26]; 
// console.log(oneChar);           //f
// console.log(funString.length);  //35
// wordArray = funString.split(" "); 
//     //will split on the given parameter, which is at every space 
//     //b/c " " will never appear in the results. 
// console.log(wordArray);
//     //['Mimi', 'is', 'dancing', 'on', 'the', 'coffee','table']
// console.log(wordArray[5].split("")); 
//     //[ 'c', 'o', 'f', 'f', 'e', 'e' ]
// console.log(wordArray.join()); 
// //Mimi,is,dancing,on,the,coffee,table
// console.log(wordArray.join("-")); 
// //Mimi-is-dancing-on-the-coffee-table
// console.log(wordArray.join(" ")); 
// //Mimi is dancing on the coffee table

//1. Remove Blanks 
//Create a function that, given a string, returns all of that string’s contents, 
//but without blanks. 
    //Examples:
    //removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
    //removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

    function removeBlanks(string){
        var wordArray =string.split(" ");
        console.log(wordArray); 
        console.log(wordArray.join(""))
    }
    removeBlanks(" Pl ayTha tF u nkyM usi c ");
    removeBlanks("I can not BELIEVE it's not BUTTER")