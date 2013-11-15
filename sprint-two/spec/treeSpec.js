describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });
  it("should return tree when we add to tree", function(){
    tree.addChild("bobby");
    expect(tree.children.value).toBe("bobby");
  });
  it("should return true if tree contains target", function(){
    tree.addChild("bobby");
    expect(tree.contains("bobby")).toBe(true);
  });
  //did not break when we first implemented
  it("should add child to existing child when we addChild", function(){
    tree.addChild("bobby");
    tree.children.addChild("rachel");
    expect(tree.children.children.value).toEqual("rachel");
  });
  it("should return true if tree contains target with multiple levels", function(){
    tree.addChild("bobby");
    tree.children.addChild("rachel");
    expect(tree.contains("rachel")).toBe(true);
  });


  // Add more tests here to test the functionality of tree.
});