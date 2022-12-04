//Given an array of comparable values, move the lowest element to array’s front, 
//shifting backward any elements previously ahead of it. Do not otherwise 
//change the array’s order. 
//Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
//As always, do this without using built-in functions.

function minToFront(arr){
    var min = arr[0]                 //set min to any valur and then loop through to find real min and set it to it
    var index = 0;                   //set index to zero, and this is used to find the index of min value
    for (var i =1; i<arr.length; i++){  //set i = 1, cause we already set arr[0] as a variable to compare
        if (arr[i] < min){
            min = arr[i];
            index = i;
        }
    }
    for(var j = index; j >0; j-- ){     //this for loop will start at the min value' index of the array
        var temp = arr[j];
        arr[j]=arr[j-1]; 
        arr[j-1]= temp; 
    }
    console.log(arr); 
    return arr; 
}

minToFront([4,2,1,3,5]);