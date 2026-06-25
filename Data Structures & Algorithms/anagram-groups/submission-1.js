class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let char of strs) {
            const sorted = char.split("").sort().join("");

            if (res[sorted]) {
                res[sorted].push(char);
            }else{
            res[sorted] = [char];

            }

        }
        return Object.values(res);
    }
}
