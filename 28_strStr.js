/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   // return haystack.indexOf(needle);
   var lenH = haystack.length;
   var lenN = needle.length;
   for(var i=0; i<lenH-lenN+1; i++){
       if(haystack.substring(i,i+lenN)===needle) return i;
   }
   return -1;
};