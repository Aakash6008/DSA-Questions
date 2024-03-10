// string in js
let firstName = "Aakash"

//length of String
console.log(firstName.length)

//Access string element
console.log(firstName.charAt(2))
console.log(firstName[2])
console.log(firstName.charCodeAt(2))

// Check Presence of character
console.log(firstName.includes('k'))
console.log(firstName.indexOf("k"))
console.log(firstName.lastIndexOf("a"))

//Compare two string
let anotherName = "Abhinav"
console.log(firstName.localeCompare(anotherName))

//Replacing Substring
let str = "Abhinav is the best frontend Developer. Abhinav is best Developer"
console.log(str.replace("Abhinav","Aakash"))
//to replace all use
console.log(str.replaceAll("Abhinav","Aakash"))
//OR   console.log(str.replace("/Abhinav/g","Aakash"))

//Substring of a String
console.log(str.substring(6,30))
console.log(str.slice(-35,-1))

//Searching String
console.log(str.search("best"))
console.log(str.search("Aakash"))

// split and join
console.log(str.split("")) 
const subString = str.split(" ")
console.log(subString)
console.log(subString.join(" "))

//String Start and End
console.log(str.startsWith("Abhinav"))
console.log(str.endsWith("Developer"))

//trim and Case conversion
console.log(str.length)
const strTrim = str.trim()
console.log(strTrim,strTrim.length)

console.log(str.toLowerCase())
console.log(str.toUpperCase())


//Convert Object and Number to string
const num = 123
console.log(num.toString())

const obj = {
    name: "Aakash",
    course: "DSA"
}
console.log(JSON.stringify(obj))


//Concatenate Strings
const lastName = "Pokhriyal"
console.log(firstName + " " + lastName)
console.log(`${firstName} ${lastName} is the best Developer`)
console.log(firstName.concat(" "+ lastName))



////////////////////////// Question 1: Find the Index of the First Occurrence in a String

/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.*/

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)

}

console.log(strStr("sadbutsad","sad"))
console.log(strStr("leetcode","leeto"))


               //OR

function findFirstOccurrence( haystack,needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}             

console.log(findFirstOccurrence("sadbutsad","sad"))
console.log(findFirstOccurrence("leetcode","leeto"))



/////////////////////////////////// Question 2: Reverse String
/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/

var reverseString = function(s){
    return s.reverse()
}
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))


                 //OR

var reverseStr = function(s){
    let start = 0;
    let end = s.length-1
    while(start<=end){
        [s[start],s[end]] = [s[end] , s[start]]
        start++;
        end--;  
    }
}                 
console.log(reverseStr(["h","e","l","l","o"]))
console.log(reverseStr(["H","a","n","n","a","h"]))

