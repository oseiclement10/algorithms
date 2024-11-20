// leet code @https://leetcode.com/problems/two-sum/



function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const neededNumber = target - nums[i];

    if (nums.includes(neededNumber, i + 1)) {
      return [i, nums.indexOf(neededNumber, i + 1)];
    }
  }

  return [];
}



