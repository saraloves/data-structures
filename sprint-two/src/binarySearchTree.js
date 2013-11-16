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

  };
  return tree;
};
