/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let newstr=str.toLowerCase();
  let c=0;
  for(let i=0;i<str.length;i++){
    if(newstr[i]=='a'||newstr[i]=='o'||newstr[i]=='i'||newstr[i]=='e'||newstr[i]=='u')
    c++;
  }
    // Your code here
    return c;
}

module.exports = countVowels;