const twoSums = (nums: number[], target: number) => {
    const map = {};
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        const otherNumber = target - nums[i];
        if (map.hasOwnProperty(otherNumber)) {
            return [map[otherNumber], i];
        }
        map[nums[i]] = i;
    }

    return [];
}

