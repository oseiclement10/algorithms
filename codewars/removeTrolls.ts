// remove vowels from a string;

export class Kata {

    static disemvowel(str: string): string {
        const vowels = ["a", "A", "e", "E", "o", "O", "u", "U", "i", "I"];
        return str.split("").map(char => vowels.includes(char) ? "" : char).join("");
    }
}

const test = "This website is for losers LOL!";

console.log(Kata.disemvowel(test) == "Ths wbst s fr lsrs LL!");