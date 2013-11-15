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

treeMethods.contains = function(value, result){
  debugger;
  console.log(this.value);
  console.log(value);
  result = result || false;
  if(!this.children){
    return;
  } else if (this.children.value === value) {
    console.log("return true is running");
    result = true;
    return result;
  }
  console.log("recursion is running");
  result = this.children.contains(value, result);
  // console.log("we are returning " +  result);
  return result;
};

//       parent p
//   ______|_________
//   |               |
// child c          child a


//newTree{children: newTree{value: "bobby", children: newTree{value: "rachel"}} };