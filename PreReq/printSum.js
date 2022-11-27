//Write a program that would print the sum of all the odd numbers from 1 to 5000

function printSum(){
    var sum = 0; 
    for(var i =1; i<=5000; i+=2){
        sum = sum +i; 
    }
    console.log(sum);
    return sum; 
}
printSum(); 

//want to declare sum variable outside the forloop b/c we are adding i to it
//2nd sum variable for the foorloop is a different than the first sum outside the forloop
//6250000