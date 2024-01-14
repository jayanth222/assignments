/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // //my method
  // if(str1.length!=str2.length)
  // return false;
  // let s1=[];
  // for(let i=0;i<str1.length;i++){
  //   s1.push(str1[i].toLowerCase());
  // }
  // for(let i=0;i<str2.length;i++){
  //   if(s1.indexOf(str2[i].toLowerCase())<0)
  //   return false;
  //   s1.splice(s1.indexOf(str2[i].toLowerCase()),1);
  // }
  // if(s1.length!=0)
  // return false
  // return true;

  //new method
  if(str1.length!==str2.length)
  return false;
  const newstr1=str1.toLowerCase().split('').sort().join('');
  const newstr2=str2.toLowerCase().split('').sort().join('');
  if(newstr1===newstr2)
  return true;
  return false;
}

module.exports = isAnagram;
