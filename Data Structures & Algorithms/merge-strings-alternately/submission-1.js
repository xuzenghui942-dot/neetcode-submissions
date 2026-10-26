class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     * 
     */
    mergeAlternately(word1, word2) {
        let i = 0 ; 
        let j = 0 ;
        const res = [];
        while(i<word1.length || j < word2.length){
            if(i<word1.length){
                res.push(word1[i]);
                i++;
            }
            if(j<word2.length){
                res.push(word2[j]);
                j++
            }

        }
        return res.join('');
    }
}
