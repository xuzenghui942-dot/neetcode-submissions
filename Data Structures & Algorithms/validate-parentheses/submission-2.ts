class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const closeToOpen = {
            ')' :'(',
            ']' : '[',
            '}' : '{',
        }
        for(let char of s){
            // if(closeToOpen[char]){
            //     if(stack.length>0 && stack[stack.length-1] === closeToOpen[char]){
            //         stack.pop()
            //     }else{
            //         return false
            //     }
            // }else{
            //     stack.push(char)
            // }
            const valid = closeToOpen[char] ? stack.pop() === closeToOpen[char] : stack.push(char) > 0 ;
            if(!valid) return false
        }
        return stack.length === 0 
    }
}
