class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        let j = str.length -1;
        let i = 0 
        while(i < j){
            if(str[i] === str[j]){
                i++;
                j--;
            }else{
                return false
            }

            
        }
        return true
    }
}
