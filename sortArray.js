// Prompting user for numbers and names
let numbers = prompt("Enter numbers separated by commas: ").split(',').map(Number);
let names = prompt("Enter names separated by commas: ").split(',');

// Merging both arrays
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sorting numbers in reverse order using arrow function
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sorting names alphabetically using arrow function
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);