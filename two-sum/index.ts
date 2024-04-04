// leet code @https://leetcode.com/problems/two-sum/

// initial solution
function twoSums(nums: number[], target: number): number[] {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const firstNum = nums[i];
    for (let j = i + 1; j < length; j++) {
      if (firstNum + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// solution after reading hint 2
function twoSumAdvance(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const neededNumber = target - nums[i];

    if (nums.includes(neededNumber, i + 1)) {
      return [i, nums.indexOf(neededNumber, i + 1)];
    }
  }

  return [];
}

// solution after reading hint 3

function twoSumElite(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  throw new Error("No two sum solution"); // No solution found
}


