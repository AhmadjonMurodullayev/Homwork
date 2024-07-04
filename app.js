// 1. nums = [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan qiymatning nechinchi indexda turganini aniqlang rasult=>[ index ]
let nums = [4,5,6,7,0,1,2]
function  numParams(num) {
  let target = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 7) {
      target.push(i);
    }
  }
  return target;
}
console.log (numParams(nums))

// 2. nums = [1,3,2,4,5,6,99,102], target = 5, o'sish va kamayish tartibli array ichida target qiymati array ichida nechinchi qiymatda turganini aniqlang 
function findTargetIndex(nums, target) {
  const numsSorted = nums.slice().sort((a, b) => a - b);

  function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const nem = Math.floor((high + low) / 2);

      if (arr[nem] < x) {
        low = nem + 1;
      } else if (arr[nem] > x) {
        high = nem - 1;
      } else {
        return nem;
      }
    }
    return -1;
  }

  const index = binarySearch(numsSorted, target);
  return index;
}

const nums = [1, 3, 2, 4, 5, 6, 99, 102];
const target = 5;
const index = findTargetIndex(nums, target);

console.log(index);
