/*
    for loop to print multiplication by 9
*/
console.log("Multiplication by 9 using for loop:\n");
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
}

console.log("\nFull Multiplication Tables:\n");

/*
    Nested for loop to print full multiplication tables
*/
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("----------------------"); // Separator for better readability
}
