//Given an array with multiple values (e.g. [1,3,5,7,20]), 
//write a program that prints the average of the values in the array.  
//Again you're not to do this by using of any of the pre-built functions in Javascript.  
//Again iterate through each number in the array and update the 'average' as the program retrieves each number in the array.

var x = [1,3,10,7,20];
var sum = 0;

function findAvg(){
    for(var i = 0; i<x.length; i++){
        sum = sum + x[i]; 
        var avg = sum/x.length; 
    }
    console.log(sum);
    console.log(avg);
    return avg; 
}

findAvg(); 