const arr = [1, 2, 3, 4, 5];
arr.unshift(0);
arr.reverse();
console.log(arr);

//challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
arr2.shift();
const arr3 = arr1.concat(arr2);
console.log(arr3);