// const nums1 = [1, 3];
// const nums2 = [2];

const nums1 = [1, 2, 6, 7, 8, 12, 4, 8, 9, 4, 2];
const nums2 = [3, 4, 2, 3, 4];


const findMedianOfSortedArrays = (arr1: number[], arr2: number[]): number => {
    const merged = [...arr1, ...arr2];
    const sorted = merged.sort();

    const length = sorted.length;

    if (length % 2 == 0) {
        return (sorted[(length / 2) - 1] + sorted[length / 2]) / 2;
    }

    return sorted[Math.floor(length / 2)];


}

console.log(findMedianOfSortedArrays(nums1, nums2));