var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.parent = undefined;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // this.value = value;
  var child = makeTree();
  child.value = value;
  child.parent = this;
  if (this.children === undefined) {
    this.children = [child];
  } else {
    this.children.push(child);
  }
};

//removeFromParent()
//tell the parent this child is no longer your child
//turn .parent = undefined
treeMethods.removeFromParent = function(){
  var parentNode = this.parent;
  for(var i = 0; i < parentNode.children.length; i++){
    var currentChild = parentNode.children[i];
    if(currentChild.value === this.value){
      parentNode.children.splice(i, 1);
      break;
    }
  }
  this.parent = undefined;
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


//tree.children[1].removeFromParent();