                         // Question 1: Sum of all natural numbers from 1 to n 

// 5 = 1+2+3+4+5 = 15
// 8 = 1+2+3+4+5+6+7+8 = 36                          
function sumOfNaturalNum(nums){
  let sum = 0;
    for(let i = 1 ; i <= nums ; i++){
      sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNum(5))

// Or 

function sumOfNaturalNums(num){
  return num* (num + 1)/2
}
console.log(sumOfNaturalNums(8))



                                 //Question 2: Sum of digits of a number


// 1287   1+2+8+7 = 18
// 1287%10 rem = 7 ,q = 128%10 rem = 8 , q = 12%10 = rem = 2 , q = 1%10 rem = 1
// rem = 7+8+2+1 = 18
function sumOfdigit(num){
  let sum = 0 
  while(num > 0){
   sum = sum + num%10;
   num = Math.floor(num/10)
  }
  return sum;
}

console.log(sumOfdigit(1287))



                                  //Question 3: Count the number of digits of a number


// 1948 = 4
// -234 = 3
function countDigit(nums){
   let num = Math.abs(nums)
   let count = 0

   do{
    count++
    num = Math.floor(num/10)
   }while(num > 0){
    return count;
   }
}

console.log(countDigit(1948))
console.log(countDigit(-234))


                            // Question 4: Check if a number is palindrome
                            // Palindrome


   let isPalindrome = function(x) {
           let copyNum = x, reverseNum = 0;
                            
           while(copyNum > 0){
                  const lastDigit = copyNum % 10;
                  reverseNum = reverseNum * 10 + lastDigit;
                  copyNum = Math.floor(copyNum / 10);
                              }
                            
                              return x === reverseNum;
             };
                            
 console.log(isPalindrome(121));
 console.log(isPalindrome(1234)); 

let word = "Madam"
let letter = word.split("")
console.log(letter)

let reverse = letter.reverse();
console.log(reverse)

let join = reverse.join("")
console.log(join)

let toLow = join.toLowerCase()
console.log(toLow)




                             //Question 5: Find nth Fibonacci number


var fib = function(n){

  if(n < 2){
    return n;
}

let prev = 0, curr = 1, next;
for(let i=2; i<= n; i++){
    next = prev + curr;
    prev = curr;
    curr = next;
}
return next;
  
}

console.log(fib(5));
console.log(fib(10));



                                  //Question 6: Missing Number in an Array


// x = [3,0,1]  missing = 2
// x = [0,4,2,5,6,1] missing = 3 

function missingNum(num){
  let sum = 0

  for(let i = 0; i <= num.length ; i++){
    sum = sum + num[i];
  }
  return num.length*(num.length+1)/2 - sum;
}

console.log(missingNum([0,7,5,6,2,3,1]))