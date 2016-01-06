/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var result = [];
    result[0] = 1;
    result[1] = 1;
    for(var i=2; i<=n; i++){
        result[i] = 0;
        for(var j=1; j<=i; j++){
            result[i] += result[j-1]*result[i-j];
        }
    }
    return result[n];
};