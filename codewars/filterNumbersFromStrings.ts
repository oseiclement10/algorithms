const filterNumbers = (list: (string | number)[]) => {
    return list?.filter((elem) => typeof elem === "number");
}

const tk1 = [1,2,'a','b']
const tk2 = [1,'a','b',0,15]
const tk3 = [1,2,'aasf','1','123',123] 

console.log(filterNumbers(tk1));
console.log(filterNumbers(tk2));
console.log(filterNumbers(tk3));
