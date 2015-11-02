/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length===0) return true;
    var stack = [];
    for(var i=0; i<s.length; i++){
        switch(s.charAt(i)){
           case "(" : stack.push(")"); break;
           case "[" : stack.push("]"); break;
           case "{" : stack.push("}"); break;
           case ")" :if(stack.length===0 || stack.pop()!==")") return false; break;
           case "]" :if(stack.length===0 || stack.pop()!=="]") return false; break;
           case "}" :if(stack.length===0 || stack.pop()!=="}") return false; break;
        }
    }
    if(stack.length===0) return true;
    else return false;
};