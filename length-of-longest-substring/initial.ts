const test1 = "abcabcbb";
const test2 = "bbbbb";
const test3 = "pwwkew";


const lengthOfLongestSubstring = (str: string): number => {

    const length = str.length;
    let cache: Record<string, number> = {};
    let count = 0;
    let max: number[] = [];

    for (let i = 0; i < length; i++) {
        if (cache.hasOwnProperty(str[i])) {
            max.push(count);
            count = 1;
        } else {
            cache[str[i]] = 1;
            count++;
        }
    }
    return Math.max(...max);
}


console.log(lengthOfLongestSubstring(test1));
console.log(lengthOfLongestSubstring(test2));
console.log(lengthOfLongestSubstring(test3));


