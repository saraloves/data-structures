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
  this.value = value;
};

treeMethods.contains = function(){
};

//       parent p
//   ______|_________
//   |               |
// child c          child a


