//write a program that would print all the numbers from 1 to 255
function print(){
    for( var i = 1; i <256; i++){
        console.log(i);
    }
    return i; 
}

print(); 
//Notes to self
//want return outside the For-loop b/c it will return every i iteration;
//if return inside forloop, then it will only return i within that iteration