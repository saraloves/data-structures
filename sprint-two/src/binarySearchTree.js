var makeBinarySearchTree = function(){
  var tree = {};
  tree.left = undefined;
  tree.right = undefined;
  tree.value = undefined;
  tree.insert = function(value){
    //if value is greater than tree.value, set value to tree.right, if tree.right === undefined. otherwise,
    //compare value to tree.right
    //keep going recursionally
    //else if value is less than tree.value, set value to tree.left, if tree.left === undefined. otherwise,
    //compare value to tree.left
    //keep going recursionally
    var node = makeBinarySearchTree();
    node.value = value;
    if (value > tree.value) {
      if (tree.right === undefined) {
        tree.right = node;
      } else {
        tree.right.insert(value);
      }
    } else if (value < tree.value) {
      if (tree.left === undefined) {
        tree.left = node;
      } else {
        tree.left.insert(value);
      }
    }
  };
  tree.contains = function(value){
    if (value === tree.value) {
      return true;
    } else if (value > tree.value) {
      if (tree.right) {
        return tree.right.contains(value);
      }
    } else if (value < tree.value) {
      if (tree.left) {
        return tree.left.contains(value);
      }
    }
    return false;
  };
  tree.depthFirstLog = function(callback){
    //start at parent node.  while searchtree.left exists, then we check to see if that one has a left.
    //once searchtree.left no longer exists, then we run callback on the node we're on.
    //go back up one level and go right.  if it exists, we go left.  we continue to go left until there are no
    //more lefts.  once searchtree.left no longer exists, we run callback on the node we're on.

    //base case: no more rights or lefts means that we run callback!
    if (tree.left) {
      tree.left.depthFirstLog(callback);
    }
    if (tree.right) {
      tree.right.depthFirstLog(callback);
    }
      callback(tree.value);
  };
  return tree;
};
