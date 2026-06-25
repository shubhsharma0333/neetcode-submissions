class Solution {
    groupAnagrams(strs) {
        const result = [];
        const visited = new Set();

        for (let i = 0; i < strs.length; i++) {
            if (visited.has(i)) continue;

            const freq = {};

            for (const ch of strs[i]) {
                freq[ch] = (freq[ch] || 0) + 1;
            }

            const group = [strs[i]];
            visited.add(i);

            for (let j = i + 1; j < strs.length; j++) {
                if (visited.has(j)) continue;

                if (strs[i].length !== strs[j].length) {
                    continue;
                }

                const temp = { ...freq };
                let isAnagram = true;

                for (const ch of strs[j]) {
                    if (!temp[ch]) {
                        isAnagram = false;
                        break;
                    }

                    temp[ch]--;
                }

                if (
                    isAnagram &&
                    Object.values(temp).every(v => v === 0)
                ) {
                    group.push(strs[j]);
                    visited.add(j);
                }
            }

            result.push(group);
        }

        return result;
    }
}