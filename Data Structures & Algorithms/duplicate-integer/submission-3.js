class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for (const el of nums) {
            if (set.has(el)) {
                return true;
            }
            set.add(el);
        }

        return false;
    }
}