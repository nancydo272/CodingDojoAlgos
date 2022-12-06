var funString = 'Mimi is dancing on the coffee table'; 
var oneChar = funString[26]; 
console.log(oneChar);           //f
console.log(funString.length);  //35
wordArray = funString.split(" "); 
    //will split on the given parameter, which is at every space 
    //b/c " " will never appear in the results. 
console.log(wordArray);
    //['Mimi', 'is', 'dancing', 'on', 'the', 'coffee','table']
console.log(wordArray[5].split("")); 
    //[ 'c', 'o', 'f', 'f', 'e', 'e' ]
console.log(wordArray.join()); 
//Mimi,is,dancing,on,the,coffee,table
console.log(wordArray.join("-")); 
//Mimi-is-dancing-on-the-coffee-table
console.log(wordArray.join(" ")); 
//Mimi is dancing on the coffee table