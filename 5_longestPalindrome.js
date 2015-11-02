/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s;
    var s1 = "";
    var s2 = "";
    var result = "";
    var longer = "";
    for(var i=0; i<s.length-1; i++){
        s1 = longestAtPoint(s,i,i);
        s2 = longestAtPoint(s,i,i+1);
        longer = (s1.length>s2.length)? s1 : s2;
        result = (result.length<longer.length)? longer:result;
    }
    return result;
};

var longestAtPoint = function(s,start,end){
    while(start>=0 && end<=s.length-1 && s.charAt(start)===s.charAt(end)){
        start--;
        end++;
    }
    return s.substring(start+1, end);
}