// <!-- JavaScript Questions:

//  Q1. Write a JavaScript function to check whether an input is an array or not. asking

// Q2.  Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.

// Q3. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array. 
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]

// Q4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample Array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// Q5. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8 -->

// 1.
let arr0=[1,2,3,4] 
result = Array.isArray(arr0);
console.log(result)
// 2.

let  arr = [1,2,3,4,5,6];
for(i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// 3.

let arr1 = [1,0,2,3,4];
let arr2 = [3,5,6,7,8,13];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);

// 4.
  let mycolor =["red","green","white","black"];
  let arr4 = mycolor.toString();
  console.log(arr4)
  let arr5 = mycolor.join("+")
  console.log(arr5)

// 5.
var arr6 = [ -4,-3, 8, 7, 6, 5, 3, 2, 1 ];
var arr7 =arr6.sort();
console.log(arr7)
