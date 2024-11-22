//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

const test = ["Ryan", "Kieran", "Jason", "Yous"]
const test2 = ["Peter", "Stephen", "Joe"];

export function friend(friends: string[]): string[] {
    return friends.filter(elem => elem.length == 4);
}

console.log(friend(test2));