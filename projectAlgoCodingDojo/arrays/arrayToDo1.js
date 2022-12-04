//1. Push Front 
//Given an array and an additional value, insert this value at the beginning of the array. 
//You may use .push(), you are able do this without it though!
    //Examples:

    //pushFront([5,7,2,3], 8) => [8,5,7,2,3]
    //pushFront([99], 7) => [7,99]

    function pushFront(x, val){
        for(var i=x.length; i>0; i--){
            x[i]=x[i-1]
        }
        x[0]= val; 
        console.log(x);
        return x; 
    }
pushFront([5,7,2,3], 8);
pushFront([99], 7);

//when you want to shift to the right, you start at the end and subtract. 
//when you want to shift to the let, you start at the begining and add.

//2. popFront
//Given an array, remove and return the value at the beginning of the array. 
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

//3. Insert At
//Given an array, index, and additional value, insert the value into array at given index. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
//You may use .push(), you are able do this without it though!
    //Examples:

    //insertAt([100,200,5], 2, 311) => [100,200,311,5]
    //insertAt([9,33,7], 1, 42) => [9,42,33,7]

    function insertAt(arr, j, val){
        for(var i = arr.length; i>j; i--){
            arr[i]=arr[i-1];
        }
        arr[j]= val;
        console.log(arr)
    }
    console.log(insertAt([100,200,5], 2, 311));
    console.log(insertAt([9,33,7], 1, 42));

//4. Remove At 
//Given an array and an index into array, remove and return the array value at that index. 
//Prove the value is removed from the array by printing it. 
//Think of popFront(arr) as equivalent to removeAt(arr,0).
    //Examples:
    //removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
    //removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

    function removeAt(arr, j){
        var temp = arr[j];
        for(var i = j; i<arr.length; i++){
            arr[i]=arr[i+1];
        }
        arr.length = arr.length-1;
        console.log(arr);
        // console.log(temp);
        return temp; 
    }
    console.log(removeAt([1000,3,204,77], 1));
    console.log(removeAt([8,20,55,44,98], 3));

//5. Swap Pairs 
//Swap positions of successive pairs of values of given array. 
//If length is odd, do not change the final element.
    //Examples:
    //insertAt([1,2,3,4]) => [2,1,4,3]
    //insertAt(["Brendan",true,42]) => [true,"Brendan",42]

function insertAt(arr){
    var temp = arr[0];
    if(arr.length % 2 == 0){
        arr[0]=arr[arr.length-1];
        arr[arr.length-1] = temp; 
    }
    // console.log(arr);
    return arr;
}
console.log(insertAt([1,2,3,4]));
console.log(insertAt(["Brendan",true,42]));

