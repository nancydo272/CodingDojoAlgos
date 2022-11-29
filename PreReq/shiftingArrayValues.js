//Given an array x (e.g. [1,5, 10, 7, -2]), create an algorithm (sets of instructions) 
//that shifts each number by one (to the front).  For example when the program is done 
//x (assuming it was [1,5,10,7,-2]) should become [5,10,7,-2, 0].  

var x = [1,5,10,7,-2]; 

function shiftingArray(){
    for(var i = 0; i<x.length-1; i++){
        x[i]=x[i+1];
        console.log(x[i]);
    }
    x[x.length-1] = 0; 
    console.log(x);
    return x; 
}

shiftingArray(); 

//i<x.length -1 in the forloop to have one value less than the number of values already in x --> 5 ->4 
//x[i] = x[i+1] --> to change the i to shift over the values since we are Re-Setting what x[i] is 
//lines 14-15, need to be out the loop cause it will keep adding 0 underfined
//outside the loop x= [ 1, 5, 10, 7, -2] --> make x[4]=0 --> now x = x[1, 5, 10, 7, 0]
//then you can push x[4] = 0 intto y --> [5,10,7,-2, 0].  