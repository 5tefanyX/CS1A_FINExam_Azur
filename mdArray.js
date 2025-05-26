// Prompting user for names and ages
let names = prompt("Enter names separated by commas: ").split(", ");
let ages = prompt("Enter ages separated by commas: ").split(", ").map(Number);

// Restructuring the multi-dimensional array
let restructuredArray = names.map((name, index) => [name, ages[index]]);

// Logging the restructured array
restructuredArray.forEach(subArray => {
    console.log(subArray);
});