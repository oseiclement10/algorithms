//Given the triangle of consecutive odd numbers:
//                 1
//             3     5
//         7     9    11
//     13    15    17    19
// 21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)

export function rowSumOddNumbers(n: number): number {
    let oddCount = 1;
    const odds: number[] = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i == 1 && j == 1) {
                odds.push(1)
            } else {
                odds.push(oddCount += 2)
            }
        }
    }


    return odds.slice(-n).reduce((acc, current) => acc + current, 0);

}

//after finding out its just n^3

export function rowSumOddNumbersOtptimized(n: number): number {
    return Math.pow(n, 3);
}

console.log("1 :", rowSumOddNumbers(1));
console.log("2 :", rowSumOddNumbers(2));
console.log("3 :", rowSumOddNumbers(3));
console.log("13 :", rowSumOddNumbers(13));
console.log("19 :", rowSumOddNumbers(19));
console.log("41 :", rowSumOddNumbers(41));
console.log("42 :", rowSumOddNumbers(42));
console.log("74 :", rowSumOddNumbers(74));
console.log("86 :", rowSumOddNumbers(86));
console.log("93 :", rowSumOddNumbers(93));
console.log("101 :", rowSumOddNumbers(101));
