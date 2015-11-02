/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";
    var result = strs[0];
    var eachTwo = "";
    for(var i=1; i<strs.length; i++){
        eachTwo = findLongestConPreForTwo2(strs[i],result);
        result = (result.length>eachTwo.length)?eachTwo:result;
        if(result==="") return result;
    }
    return result;
};

var findLongestConPreForTwo = function(s1,s2){
    if(s1.length===0 || s2.length===0) return "";
    var i = 0;
    while(i<s1.length && i<s2.length && s1.charAt(i)===s2.charAt(i)){
        i++;
    }
    return s1.substring(0,i);
} 

var findLongestConPreForTwo2 = function(s1,s2){
    if(s1==="" || s2==="") return "";
    var i = s1.length;
    var s ="";
    while(i>=0){
        s = s1.substring(0,i);
        if(s2.indexOf(s)===0) return s;
        else i--;
    }
    return "";
} 