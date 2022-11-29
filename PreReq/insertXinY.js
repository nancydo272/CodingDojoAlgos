//Write a program that inserts a new number X at an index Y. 
//For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, 
//by the end of your program array should be [1, 3, 10, 5, 7] 
//(in other words we added '10' on index 2). Check the output of 
//your array once your program is completed to make sure it's working correctly.

var array = [1, 3, 5, 7];
var X = 10;
var Y = 2;

function insert(){
    array.push(0);
    for(var i =array.length-1; i > Y; i--){
        array[i]=array[i-1];
    }
    array[Y]=X;
    console.log(array);
    return array; 
}

insert();
//[ 1, 3, 5, 7, 0 ]
// [ 1, 3, 5, 7, 7 ]
// [ 1, 3, 10, 5, 7 ]
//function insert(){
//     array.push(0);
//     array[4]=7;
//     array[3]=5;
//     array[Y] = X; 
//     console.log(array);
//     return array;
// }
//function insert(){
//     array.push(0);
//     console.log(array);
//     array[array.length-1] = array[3];
//     console.log(array);
//     array[array.length-2] = array[2];
//     array[Y]=X;
//     console.log(array);
//     return array;
// }