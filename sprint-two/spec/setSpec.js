describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });
  it("should be able to add a value", function(){
    set.add("ceiling");
    expect(set._storage[0]).toBe("ceiling");
  });
  it("should be able to add more than one value", function(){
    set.add("ceiling");
    set.add("wall");
    expect(set._storage[0]).toBe("ceiling");
    expect(set._storage[1]).toBe("wall");
  });
  it("should return true if it contains the target", function(){
    set.add("ceiling");
    set.add("wall");
    set.add("floor");
    expect(set.contains("wall")).toBe(true);
  });
  it("should remove a value if present", function(){
    set.add("ceiling");
    set.add("window");
    set.remove("ceiling");
    expect(set.contains("ceiling")).toBe(false);
  });
  it("should not add the same value more than once", function(){
    set.add("ceiling");
    set.add("ceiling");
    expect(set._storage.length).toBe(1);
  });
});