//Create an array X and fill the array with 10 values, 
//each value being a random integer between 0 to 100.  
//For example when your program is done, X could be something like this:
// [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].

var x = []; 

function randomArray(){
    for(var i = 0; i < 10; i++){
        var random = Math.floor(Math.random() * 101);
        x.push(random)
    }
    console.log(x); 
    return x
}

randomArray(); 

//Math.random(); --> returns everything from 0 --> 0.99999, never reaching 1 (random float)
//Math.floor(); --> turns float to integer
//Want to multiply by 101 to get the upper limit to be 100 after flooring it from 100.99
