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
  if (this.children === undefined) {
    this.children = [child];
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(value){
  if(!this.children){
    return false;
  }
  for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === value){
      return true;
    }
    if(this.children[i].contains(value)) return true;
  }
  return false;
};

//       parent p
//   ______|_________
//   |               |
// child c          child a


//newTree{children: {value: "bobby", children: newTree{value: "rachel"}}, {value: "tommy", children: }};
