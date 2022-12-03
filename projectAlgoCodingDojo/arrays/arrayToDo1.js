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