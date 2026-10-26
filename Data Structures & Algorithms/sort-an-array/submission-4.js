class Solution {
    /**
     * @param {number[]}
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums,0 ,nums.length - 1);
        return nums;
    }
    // 完成mergeSort
    mergeSort(arr,l,r){
        if(l >= r) return ; // merge完成
        let m = Math.floor((l+r) / 2);
        this.mergeSort(arr,l,m);
        this.mergeSort(arr,m+1,r);
        this.merge(arr,l,m,r);
    }
    merge(arr , l , m , r ) {
        let temp = [];
        let i = l ; 
        let j = m + 1 ; 
        while( i <= m && j <= r) {
            if(arr[i] <= arr[j]){
                temp.push(arr[i++]);
            }else{
                temp.push(arr[j++]);
            }
        } 
        // 把一分为二的两边刷入temp临时数组里面
        // 其中一个没刷完
        while (i <= m ) temp.push(arr[i++]);
        while ( j<= r ) temp.push(arr[j++]);
        
        for( let i = 0 ; i < temp.length ; i++){
            arr[l + i] = temp[i]; // 在把temp里面的刷回去
        }
    }
}
