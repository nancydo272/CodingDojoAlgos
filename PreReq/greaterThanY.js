//Write a program that takes an array and returns the number of values in that array whose value is greater than y. 
//For example, if array = [1,3, 5, 7] and y = 3, after your program is run it will print 2 
//(since there are two values in the array whose value is greater than 3).  
//Again make sure you come up with a simple base case and write instructions to solve that base case first 
//and then test your instructions for other complicated cases. You can use a count function with this assignment.

var array = [1, 3, 2, 10]; 
var y = 3; 
var num = 0; 

function greaterThanY(){
    for (var i = 0; i<array.length; i++){
        if(array[i]>y){
            num++; 
        }
    }
    console.log(num);
    return num; 
}

greaterThanY(); 