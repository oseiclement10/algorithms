export function printerError(s: string): string {

    const start = 'a'.charCodeAt(0);
    const end = 'm'.charCodeAt(0);

    let errors = 0;

    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0);
        if (charCode > end || charCode < start) {
            errors++;
        }
    }


    return `${errors}/${s.length}`;
}

const tst = "aaabbbbhaijjjm";
const tst2 = "aaaxbbbbyyhwawiwjjjwwm";
const tst3 = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";

console.log(printerError(tst3));