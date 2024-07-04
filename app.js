// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]
// let nums = [4,5,6,7,0,1,2]
// function  numParams(num) {
//   let target = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === 7) {
//       target.push(i);
//     }
//   }
//   return target;
// }
// console.log (numParams(nums))

// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang 
// function findTargetIndex(nums, target) {
//  for(let i = 0; i < nums.length; i++){
//   if(nums[i] === target)
//     return i
//  }

//   const index = binarySearch(numsSorted, target);
//   return index;
// }

// const nums = [1, 3, 2, 4, 5, 6, 99, 102];
// const target = 5;
// const index = findTargetIndex(nums, target);

// console.log(index);



// 3.ixtiyoriy object yaratilsin va key va valuesi kamida 4 ta bo'lsin 1. key larini ro'yxati chiqarilsin 2. value larining ro'yxati chiqarilsin

// const myObject = {
//   names: 'Jeki', age: 18, location: 'Manarhiya', city: 'Unaytid kingdom'

// };

// const keys = Object.keys(myObject);
// console.log('Keys:', keys);

// const values = Object.values(myObject);
// console.log('Values:', values);


// 4. 2 ta 4 tadan element dan mavjud bo'lgan object yaratilsin 1. ularning birlashmasi topilsin 2. birlashmasining keyi topilsin 3. birlashmasining valuesi topilsin 4. birlashmasining valuelarining yig'indisi topilsin

// const obj1 = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40
// };

// const obj2 = {
//   e: 50,
//   f: 60,
//   g: 70,
//   h: 80
// };

// const combinedObj = { ...obj1, ...obj2 };
// console.log('Combined Object:', combinedObj);

// const combinedKeys = Object.keys(combinedObj);
// console.log('Combined Keys:', combinedKeys);

// const combinedValues = Object.values(combinedObj);
// console.log('Combined Values:', combinedValues);

// const sumOfValues = combinedValues.reduce((sum, value) => sum + value, 0);
// console.log('Sum of Combined Values:', sumOfValues);

// 5. Parametr sifatida istalgancha son qabul qiladigan funksiya yarating. Bu funksiyada shu sonlarning yig'indisi hisoblansin.(rast operation bilan qilinsin)

// function numNambers(...numbers) {
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }

// const result = numNambers(1, 2, 3, 4, 5);
// console.log('Sum:', result); 

// const anotherResult = numNambers(10, 20, 30);
// console.log('Sum:', anotherResult);


// 6. Ixtiyoriy function va array yarating, functionga berilgan parametr o'sish tartibida joylashgan array da nechinchi indexda, kamayish tartibida joylashgan arraydagi index toping.


const numbers = [10, 3, 15, 7, 8, 23, 74];

function findIndices(arr, target) {
const sortedAsc = arr.slice().sort((a, b) => a - b);
const sortedDesc = arr.slice().sort((a, b) => b - a);

const indexAsc = sortedAsc.indexOf(target);
const indexDesc = sortedDesc.indexOf(target);

return { indexAsc, indexDesc };
}

const targetNumber = 23;
const indices = findIndices(numbers, targetNumber);

console.log(targetNumber);

console.log(targetNumber)




