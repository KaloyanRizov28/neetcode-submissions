class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map();

        for(let s of strs){

            let count = new Array(26).fill(0);

            for(let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            let key = count.join(",");

            if(map.has(key)){
                map.get(key).push(s)
            }
            else{
                map.set(key,[s])
            }

        }
        
        return [...map.values()]
    }

   
    
}
