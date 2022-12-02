//1. Push Front 
//Given an array and an additional value, insert this value at the beginning of the array. 
//You may use .push(), you are able do this without it though!
    //Examples:

    //pushFront([5,7,2,3], 8) => [8,5,7,2,3]
    //pushFront([99], 7) => [7,99]

    var x = [5,7,2,3];
    var y = 8; 
    var z = []; 
    function pushFront(){
        for( var i = 1; i <x.length; i++){
            x.push(0); 
            z.push(y); 
            z[i]=x[i]; 
        }
        console.log(z); 
        return z; 
    }
    pushFront();