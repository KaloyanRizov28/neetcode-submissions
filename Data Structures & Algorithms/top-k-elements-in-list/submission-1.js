class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        
        for(let num of nums){
            if(freqMap.has(num)){
                freqMap.set(num,freqMap.get(num) + 1)
            }
            else{
                freqMap.set(num, 1)
            }
        }

        let bucket = Array.from({length: nums.length + 1}, () => []);


        let answ = [];

        for(let[key, value] of freqMap){
            bucket[value].push(key)
        }

        for(let i = bucket.length - 1; i>0; i--){
            for(let n of bucket[i]){
                answ.push(n);
                if(answ.length == k){
                    return answ;
                }
            }
        }
        

        return answ;
    }
}
