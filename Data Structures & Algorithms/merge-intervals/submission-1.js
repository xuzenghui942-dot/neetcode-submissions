class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=> a[0] - b[0]) // sort by start idnex
        const output = [] 
        output.push(intervals[0]) // init by start [s,e]
        for(const interval of intervals){
            const start = interval[0]
            const end = interval[1]
            const lastEnd = output[output.length-1][1]
            if(start <= lastEnd){
                output[output.length-1][1] = Math.max(lastEnd,end)
            }else{
                output.push([start,end])
            }
        }
        return output
    }
}
