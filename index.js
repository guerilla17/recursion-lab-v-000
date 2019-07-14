// Code your solution here!

mystring = "hello";

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

printString("supercalifragilisticexpialidocious");

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

 
function isPalindrome(str) {
  return true;
}
isPalindrome("hello"); 