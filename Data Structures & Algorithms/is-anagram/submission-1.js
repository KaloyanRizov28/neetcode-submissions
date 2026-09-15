class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        let mapS = new Map();
        let mapT = new Map();


        for (let char of s) {
            if (mapS.has(char)) {
                mapS.set(char, mapS.get(char) + 1)
            }
            else (
                mapS.set(char, 1)
            )
        }
        for (let char of t) {
            if (mapT.has(char)) {
                mapT.set(char, mapT.get(char) + 1)
            }
            else (
                mapT.set(char, 1)
            )
        }

        return areMapsEqual(mapS,mapT)

        function areMapsEqual(mapA,mapB){
            if(mapA.size != mapB.size){return false;}

            for(let [key,value] of mapA){
                if(!mapB.has(key) || mapB.get(key) !== value){
                    return false;
                }
            }

            return true;
        }
    }
}
