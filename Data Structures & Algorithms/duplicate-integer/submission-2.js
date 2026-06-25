class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        let flag = false;
        nums.forEach((el) => {
            if (set.has(el)) {
                flag = true;
            }
            set.add(el);
        });
        if (flag !== true) flag = false;

        return flag;
    }
}
