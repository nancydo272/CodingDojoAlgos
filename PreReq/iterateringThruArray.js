//Given an array X say [1,3,5,7,9,13], 
//write a program that would iterate through each member of 
//the array and print each value on the screen.  
//Being able to loop through each member of the array is extremely important. 
//Do this over and over (under 2 minutes) before moving on to the next algorithm challenge.

var arr = [1, 3, 4, 7, 9, 13];
function myArray(){
    for(var i = 0; i <arr.length; i++){
        console.log(arr[i]); 
    }
    return;
}

myArray();

//don't need the return since finctions will automatically put one. 
// 1
// 3
// 4
// 7
// 9
// 13