//1. Push Front 
//Given an array and an additional value, insert this value at the beginning of the array. 
//You may use .push(), you are able do this without it though!
    //Examples:

    //pushFront([5,7,2,3], 8) => [8,5,7,2,3]
    //pushFront([99], 7) => [7,99]

//     function pushFront(x, val){
//         for(var i=x.length; i>0; i--){
//             x[i]=x[i-1]
//         }
//         x[0]= val; 
//         console.log(x);
//         return x; 
//     }
// pushFront([5,7,2,3], 8);
// pushFront([99], 7);

//when you want to shift to the right, you start at the end and subtract. 
//when you want to shift to the let, you start at the begining and add.

//2. Given an array, remove and return the value at the beginning of the array. 
//Prove the value is removed from the array by printing it. 
//You may use .pop(), you are able do this without it though!
    //Examples:
    //popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
    //popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

    function popFront(array){
        var temp = array[0];
        for(var i = 0; i < array.length; i++){
            array[i]=array[i+1];
        }
        array.length = array.length -1;
        //need this line, will not work w/o it cause its a variable now;
        console.log(array);
        return temp; 
    }
    console.log(popFront([0,5,10,15]));
    console.log(popFront([4,5,7,9]));