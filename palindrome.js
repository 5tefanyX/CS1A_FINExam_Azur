// Prompting user for input with trimming and case normalization
let word1 = prompt("Enter the first word: RACECAR").trim().toLowerCase();
let word2 = prompt("Enter the second word: RECORDER").trim().toLowerCase();
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
// Check and log results
console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);
console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);
