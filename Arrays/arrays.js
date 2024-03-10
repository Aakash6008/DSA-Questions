// Create an empty arr
const arr = []
const arr1 = new Array()

console.log(arr,arr1)

//UnderStanding length of arr

const arr2 = [1,2,3,4,"Hello",{name: "Aakash"}, [1,2,3]]

const firstElem = arr2[0]
const arrLength = arr2.length
const lastElem = arr2[arrLength - 1]

console.log(firstElem,arrLength,lastElem)

//remove the last element
const remLast = arr2.pop()   //O(1)
console.log(remLast,arr2)

//adding the last element 
const addLast = arr2.push("last")  //O(1)
console.log(addLast, arr2)

// removing the first element
const remFirst = arr2.shift()  //O(N)
console.log(remFirst,arr2)

// addding the first element 
const addFirst = arr2.unshift("first") //O(N)
console.log(addFirst, arr2)

// loop through an array 
for(let i = 0; i < arr2.length ;i++){
    console.log(arr2[i])
}

arr2.forEach((x) => {
    console.log(x)
})

for(let x of arr2){
    console.log(x)
}




///////////////////////////////// Question 1: How do you check if an element exists in an array?


const findElement = (arr,target) =>
{
    for(let i = 0; i < arr.length ;i++){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr2,"Hello"))
console.log(findElement(arr2,8))

                 //OR
            
const findElem = (arr,target) =>
{
    for(let x of arr){
        if(x == target){
            return true;
        }
    }
    return false;
}

console.log(findElem(arr2,"Hello"))
console.log(findElem(arr2,8))

     
              //OR

console.log(arr2.includes("Hello"))
console.log(arr2.includes(8))   



/////////////////////////////// Question 2: How do you find the index of an element in an array?


const findIndex = (arr,target) => {
    for(let i = 0; i < arr.length ;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(findIndex(arr2,"Hello"))
console.log(findIndex(arr2,8))

              //OR


console.log(arr2.indexOf("Hello"))
console.log(arr2.indexOf(8))



//////////////////////////// Question 3: How to delete, add & update elements from a specific index?

 //Splice

console.log(arr2)
arr2.splice(1,3)  //Delete  (start,end)  (1,3) start from Index 1 to 3 
console.log(arr2)
arr2.splice(1,0,1,2,3,4,5,6)  //add  (start,end (with zero for no deletion) ,new elements)
console.log(arr2)
arr2.splice(1,3,7,8,9)  //update (start,end(to which element we have to update) ,new elements)
console.log(arr2)


 //Slice             
 const subArr = arr2.slice(1,4)  //(start,end)  (1,4) start from Index 1 before Index 4 that means till Index 3
 console.log(subArr,arr2)



 // Shallow Copy of array       //Not Recommended to do this
const arrB = arr2;
arrB.splice(1,3)
console.log(arrB,arr2)

// Deep copy of array        //Recommended
const arrC = [...arr2]
arrC.splice(1,5)
console.log(arrC,arr2)

      //OR

const arrD = Array.from(arr2)
arrD.splice(1,5)
console.log(arrD,arr2)

     //OR

const arrE = arr2.concat()
arrE.splice(1,5)
console.log(arrE,arr2)     


// How to add Two arrays??
// How to concatenate two arrays in ?
  
const newArray = [...arr2,...arrC]
console.log(newArray)

     //OR

const newArray2 = arr2.concat(arrC);
console.log(newArray2)    




////////////////////////////////// Question 3: How can you check if two arrays are equal?


const arrEqual = (arr1,arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(arrEqual([1,2,3],[1,2,3]))
console.log(arrEqual([1,2,3],[3]))

          //OR

const isArrEqual = (arr1,arr2) => {
    return arr1.length === arr2.length  && arr1.every((elem, i) => arr1[i] === arr2[i])
}          

console.log(isArrEqual([1,2,3],[1,2,3]))
console.log(isArrEqual([1,2,3],[3]))



////////////////////////////////// Question 4: How to sort an array in ascending and descending order?

//sort
const x = [1,5,67,3,8,4,-1,-8,-3,11,100,1000]
x.sort()   //O(nlogn)
console.log(x)

x.sort((a,b) => a-b)   // Ascending Order  a-b
console.log(x)

x.sort((a,b) => b-a)    //Descending Order b-a
console.log(x)


//////////////////////////// Question 5: How to reverse an array?

x.reverse()
console.log(x)


/////// Map , Filter and Reduce /////

const mapArr = x.map((elem,i) => elem*elem)
console.log(mapArr)

const positiveNum = x.filter((elem,i) => elem > 0)
console.log(positiveNum)

const sumOfArr = positiveNum.reduce((acc,elem) => elem + acc , 0)
console.log(sumOfArr)


//// Flat

const y = [1,2,[3,4,[5,6]],7]
const flatted = y.flat(2)
console.log(flatted)

// filter vs Find


const positiveNums = x.filter((elem,i) => elem > 0)
console.log(positiveNums)

const positiveNumFind = x.find((elem,i) => elem > 0)
console.log(positiveNumFind)



////////////////////////////////// Question 5: Two Sum
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]*/

var twoSum = function(nums,target){
    let newMap = new Map()

    for(let i = 0; i < nums.length; i++){
        let subs = target - nums[i]

        if(newMap.has(subs)){
            return [newMap.get(subs ), i]
        }
        newMap.set(nums[i],i)
    }
}

console.log(twoSum([3,2,4],6))


