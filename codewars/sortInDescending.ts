const descendingOrder = (n: number) => {
    return parseInt(n.toString().split("").sort((a, b) => Number(b) - Number(a)).join(""));
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));