/*
    tellFortune is a function that takes 4 arguments: number of children, partner's name, geographic location, job title.
    The function combines these arguments into a message and outputs it.
    Example: "You will be a X in Y, and married to Z with N kids."
    I will call the function 3 times with 3 different values for the arguments to see the differences.
    parameters: children, partnerName, location, jobTitle
    
*/


function tellFortune(children, partnerName, location, jobTitle) {
    const fortuneMessage = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;

    console.log(fortuneMessage);
}

tellFortune(3, 'Alice', 'Paris', 'Doctor');
tellFortune(2, 'John', 'New York', 'Engineer');
tellFortune(4, 'Sarah', 'London', 'Artist');
