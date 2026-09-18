class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        //     Go trough the str array in the loop 
        // 1.Initialize an array long 26 as per chars of the alpohabet.
        // 2.We map the chars of the str to the array using the charCodeat methord
        // 3.we save the whole array as a key to a map and add the current string as a value to the map . (we push it )

        let map = new Map()

        for(let str of strs){
            let arr = new Array(26).fill(0);

            for(let c of str){
                arr[c.charCodeAt()-'a'.charCodeAt()] += 1
            }

            let key = arr.join(",")

            if(map.has(key)){
                map.get(key).push(str)
            }
            else{
                map.set(key,[str])
            }

        }

        return [...map.values()]
        


    }
}