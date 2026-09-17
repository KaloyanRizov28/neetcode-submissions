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

        let sortedArray = [...freqMap.entries()].sort((a,b) => b[1] - a[1])
        let answ = [];
        for(let i = 0; i < k; i++){
            answ.push(sortedArray[i][0])
        }

        return answ;
    }
}
