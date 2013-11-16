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
    expect(tree.children[0].value).toBe("bobby");
  });
  it("should return true if tree contains target", function(){
    tree.addChild("bobby");
    expect(tree.contains("bobby")).toBe(true);
  });
  //did not break when we first implemented
  it("should add child to existing child when we addChild", function(){
    tree.addChild("bobby");
    tree.children[0].addChild("rachel");
    expect(tree.children[0].children[0].value).toEqual("rachel");
  });
  it("should return true if tree contains target with multiple levels", function(){
    tree.addChild("bobby");
    tree.children[0].addChild("rachel");
    expect(tree.contains("rachel")).toBe(true);
  });
  it("should return false if tree does not contain target", function(){
      tree.addChild("bobby");
      tree.children[0].addChild("rachel");
      expect(tree.contains("anna")).toBe(false);
  });
  it("should hold all children when adding children to same parent", function(){
    tree.addChild("booby");
    tree.addChild("stacy");
    tree.addChild("destiny");
    expect(tree.children[0].value).toBe("booby");
    expect(tree.children[1].value).toBe("stacy");
    expect(tree.children[2].value).toBe("destiny");
  });
  it("should return true if tree contains target across multiple siblings", function(){
    tree.addChild("booby");
    tree.addChild("stacy");
    tree.addChild("destinay");
    expect(tree.contains("booby")).toBe(true);
    expect(tree.contains("stacy")).toBe(true);
    expect(tree.contains("destinay")).toBe(true);
  });
  it("should return false if tree does not contain target across multiple siblings", function(){
    tree.addChild("booby");
    tree.addChild("stacy");
    tree.addChild("desTinaY");
    expect(tree.contains("fabio")).toBe(false);
  });
    it("should return true if tree contains target across multiple siblings and children", function(){
    tree.addChild("booby");
    tree.addChild("stacy");
    tree.addChild("destinay");
    tree.children[2].addChild("Faythe");
    tree.children[2].addChild("Prizm");
    tree.children[1].addChild("George");
    tree.children[1].addChild("Madison");
    tree.children[2].children[0].addChild("Robert");
    expect(tree.contains("booby")).toBe(true);
    expect(tree.contains("stacy")).toBe(true);
    expect(tree.contains("destinay")).toBe(true);
    expect(tree.contains("Faythe")).toBe(true);
    expect(tree.contains("Prizm")).toBe(true);
    expect(tree.contains("George")).toBe(true);
    expect(tree.contains("Madison")).toBe(true);
    expect(tree.contains("Robert")).toBe(true);
  });
  // Add more tests here to test the functionality of tree.
});