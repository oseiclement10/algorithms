const sumArray = (arr: number[]) => {
    return arr.reduce((acc, current) => acc + current, 0);
}

export function findEvenIndex(arr: number[]): number {

    for (let i = 0; i < arr.length; i++) {
        if (sumArray(arr.slice(0, i)) == sumArray(arr.slice(i + 1))) {
            return i;
        }
    }

    return -1;

}

const test1 = [1, 2, 3, 4, 3, 2, 1];
const test2 = [1, 100, 50, -51, 1, 1];
const test3 = [1, 2, 3, 4, 5, 6];
const test4 = [20, 10, 30, 10, 10, 15, 35];

console.log(findEvenIndex(test1));
console.log(findEvenIndex(test2));
console.log(findEvenIndex(test3));
console.log(findEvenIndex(test4));
