// function to return sum of two numbers in binary

const addBinary = (num1: number, num2: number) => {
    const sum = num1 + num2;
    return sum.toString(2);
}

// const convertToBinary = (num: number) => {
//     const reminders = [];
//     while (num >= 1) {
//         reminders.push(num % 2);
//         num = Math.floor(num / 2);
//     }

//     return reminders.reverse().join("");
// }

console.log(addBinary(1,1));
console.log(addBinary(5,9));
