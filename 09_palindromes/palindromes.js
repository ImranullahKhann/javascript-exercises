const palindromes = function (str) {
  // Traverse through the string
  let newStr = "";
  for (letter of str)
    // if letter is alphabetic
    if (isAlpha(letter))
      // concatenate it to a string
      newStr += letter;
  // turn into lowercase for easier comparison
  newStr = newStr.toLowerCase();
  // save the reverse of above string in a new variable
  let reverseStr = reverseString(newStr);
  // if both are equal 
  if (newStr === reverseStr)
    //return true
    return true;
  // else
  else
    // return false
    return false;
};

// Function to check if letter is alphabetic
function isAlpha(str) {
  // regex that includes alphabets (lower and upper case) and numbers
  let regex = /^[a-zA-Z0-9]+$/;
  return regex.test(str);
}

// Function to reverse string 
function reverseString(str) { 
  // splits the string into array of letters
  // reverses the array
  // joins it again to get the reversed string
  const reverseStr =  str.split('').reverse().join(''); 
    return reverseStr; 
} 

// Do not edit below this line
module.exports = palindromes;
