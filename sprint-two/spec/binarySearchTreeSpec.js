describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  it("should insert node into left node when value is smaller than root", function(){
    binarySearchTree.value = 10;
    binarySearchTree.insert(5);
    expect(binarySearchTree.left.value).toEqual(5);
  });
  it("should insert node into right node when value is greater than root", function(){
    binarySearchTree.value = 10;
    binarySearchTree.insert(15);
    expect(binarySearchTree.right.value).toEqual(15);
  });
  it("should insert node into a tree with depth", function(){
    binarySearchTree.value = 10;
    binarySearchTree.insert(15);
    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    expect(binarySearchTree.left.left.value).toEqual(2);
  });
  it("should return true if tree contains value we search for", function(){
    binarySearchTree.value = 50;
    binarySearchTree.insert(15);
    binarySearchTree.insert(20);
    binarySearchTree.insert(90);
    binarySearchTree.insert(80);
    binarySearchTree.insert(12);
    binarySearchTree.insert(85);
    expect(binarySearchTree.contains(15)).toEqual(true);
    expect(binarySearchTree.contains(90)).toEqual(true);
    expect(binarySearchTree.contains(85)).toEqual(true);
    expect(binarySearchTree.contains(22)).toEqual(false);
  });
  it("should alter the tree when we run depthFirstLog", function(){
    var results = [];
    binarySearchTree.value = 50;
    binarySearchTree.insert(20);
    binarySearchTree.insert(30);
    binarySearchTree.insert(90);
    binarySearchTree.insert(80);
    binarySearchTree.insert(10);
    binarySearchTree.insert(100);
    binarySearchTree.depthFirstLog(function(value){
      console.log("depth first before callback: " + value);
      results.push((value+2));
    });
    expect(results).toEqual([12,32,22,82,102,92,52]);
  });
  // add more tests here to test the functionality of binarySearchTree
});
