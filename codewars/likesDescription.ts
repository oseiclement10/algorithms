const likesDescription = (a: string[]): string => {
    const length = a.length;

    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return a[0] + " likes this";
        case 2:
            return a.slice(0, 2).join(" and ") + " like this";
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            return a.slice(0, 2).join(", ") + ` and ${length-2} others like this`;
    }

}

console.log(likesDescription([]));
console.log(likesDescription(['Peter']));
console.log(likesDescription(['Jacob', 'Alex']));
console.log(likesDescription(['Max', 'John', 'Mark']));
console.log(likesDescription(['Alex', 'Jacob', 'Mark', 'Max']));