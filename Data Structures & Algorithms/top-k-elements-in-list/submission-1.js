class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        nums.forEach((el) => {
            if (obj[el]) {
                obj[el]++;
            } else {
                obj[el] = 1;
            }
        });
        let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

        const arr = entries.map(([el, g]) => {
            return el;
        });
        return arr.slice(0, k);
    }
}
