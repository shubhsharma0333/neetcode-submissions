class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0
        for(const v of set){
            if(!set.has(v-1)){
                let length = 1;
                let current = v;

                while(set.has(current + 1)){
                    current ++;
                    length ++;
                }

                longest = Math.max(longest, length);
            }
            
        }
        return longest
        
    }
}
