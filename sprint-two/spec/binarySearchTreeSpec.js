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
  // add more tests here to test the functionality of binarySearchTree
});
