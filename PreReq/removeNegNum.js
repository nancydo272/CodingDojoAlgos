//Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), 
//write a program that removes any negative values in that array.  
//Once your program is done, the array should be composed of only the non-negative numbers, 
//in their original order.  Do this without creating a temporary array; only use the pop() method 
//to remove values from the array.

var x =[ 0, -1, 2, -3, 4, -5, 6]; 

function remove(){
    var numNeg = 0; 
    for(var i= 0; i<x.length; i++ ){
        if(x[i]<0){
            numNeg++; 
        }
        else{
            x[i-numNeg]=x[i];
        }
    }
    while (numNeg--){
        x.pop();
    }
    console.log(x);
    return(x);
}


remove();
//[ 0, -1, 2, -3, 4, -5, 6]
//i =0, num=0, x[0]=x[0]   --> x = [ 0, -1, 2, -3, 4, -5, 6]
//i =1, num=1,             --> x = [ 0, -1, 2, -3, 4, -5, 6]
//i =2, num=1, x[2-1]=x[2] --> x = [ 0, 2, 2, -3, 4, -5, 6]
//i =3, num=2,             --> x = [ 0, 2, 2, -3, 4, -5, 6]
//i =4, num=2, x[4-2]=x[4] --> x = [ 0, 2, 4, -3, 4, -5, 6]
//i =5, num=3,             --> x = [ 0, 2, 4, -3, 4, -5, 6]
//i =6, num=3, x[6-3]=x[6] --> x = [ 0, 2, 4, 6, 4, -5, 6]
//3--pop                   --> x = [ 0, 2, 4, 6] 
