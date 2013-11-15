var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // this.value = value;
  var child = makeTree();
  child.value = value;
  this.children = child;
};

treeMethods.contains = function(value){
  if(this.children.value === value) {
    return true;
  }
  return false;
};

//       parent p
//   ______|_________
//   |               |
// child c          child a

