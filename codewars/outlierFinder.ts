const testCaseOne = [2, 3, 7, 9, 11, 13];
const testCaseTwo = [2, 4, 6, 8, 12, 3];

export function findOutlier(integers: number[]): number {
    if (integers.length < 3) {
        throw "Invalid array length";
    }
    const oddFn = (elem: number) => elem % 2 !== 0;
    const evenFn = (elem: number) => elem % 2 == 0;

    const isEven = integers.slice(0, 3).filter(elem => elem % 2 == 0).length > 1;

    return integers.find(isEven ? oddFn : evenFn)!;
}

console.log(findOutlier(testCaseTwo));