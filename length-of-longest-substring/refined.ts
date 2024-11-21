function lengthOfLongestSubstring(str: string): number {
    let cache: Map<string, number> = new Map();
    let start = 0;
    let maxLength = 0;

    for (let current = 0; current < str.length; current++) {

        const char = str[current];

        if (cache.has(char) && cache.get(char)! >= start) {
            start = cache.get(char)! + 1;
        }

        cache.set(char, current);

        maxLength = Math.max(maxLength, current - start + 1);
    }

    return maxLength;

}



