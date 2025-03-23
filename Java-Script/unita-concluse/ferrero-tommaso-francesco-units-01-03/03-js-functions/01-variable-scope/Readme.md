This code is about the difference for the scope 
a variable that is defined in different point of the code can or cannot be reached if you aren't in the correct place
let globalResult = 0;

function addNumbers(num1, num2) {
    //  Local Variables (only exist inside the function)
    let localResult = num1 + num2;
    
}

globalResult --> can be reached outside the function
localResult --> cannot  be reached unless you update in the function the value  of globalResult to become equal to localResult to transport it outside the function