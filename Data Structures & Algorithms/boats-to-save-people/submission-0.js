class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b);
        let l = 0 ; 
        let r = people.length - 1 ;
        let boats = 0 ;
        while(l <= r){
            if(people[l] + people[r] <= limit){
                l++;
            }
            r--; // 加一起超重 只上重的 不超重 一起上
            boats++;
        }
        return boats++;
    }
}
