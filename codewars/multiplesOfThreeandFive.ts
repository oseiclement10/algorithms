// find sum of multiples of 5 or 3 less than a natural number n;

const multiplesOfThreeandFive = (n: number) => {
    if (n < 0) return 0;

   
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    return sum;

}

console.log(multiplesOfThreeandFive(10));