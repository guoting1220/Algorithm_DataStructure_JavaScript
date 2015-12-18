/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if((root.val>=p.val&&root.val<=q.val) || (root.val<=p.val&&root.val>=q.val)) return root;
    if(p.val<root.val) root = root.left;
    else root = root.right;
    return lowestCommonAncestor(root, p, q);
};