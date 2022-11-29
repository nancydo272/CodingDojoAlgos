//Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), 
//write a program that reverses the values in the array.  
//Once your program is done X should be in the reserved order.  
//Do this without creating a temporary array.  
//Also, do NOT use the reverse method but find a way to reverse the values in the array 
//(HINT: swap the first value with the last; second with the second to last and so forth)

var x = [-3,5,1,3,2,10];

function reversing(){
    for(var i =0; i<3;i++){
        var temp = x[i];
        x[i]=x[x.length-1-i];
        x[x.length-1-i]= temp;
        console.log(x);
    }
}
reversing(); 

//line 13, need to -1 b/c undefined x[6] 
//line 13, need to -i b/c w/o it will only work for the first switch.
//IMPT i <3 is b/c of this problem -->i< Math.floor(x.length/2) will work for any

//function reversing(){
//     var temp = x[0];
//     x[0] = x[5]; 
//     x[5] = temp; 
//     console.log("First switch ", x); 
//     var temp2 = x[1];
//     x[1]=x[4];
//     x[4]=temp2;
//     console.log("Second switch ", x);
//     var temp3 =x[2];
//     x[2]=x[3];
//     x[3]=temp3;
//     console.log("Third switch ", x);
// } --> long way, notice that we do 3 iterations of swapping --> forLoop