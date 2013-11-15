describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should return head value when adding one item", function(){
    linkedList.addToTail(5);
    expect(linkedList.head.value).toEqual(5);
  });
  it("Expect contains to return true after adding an item", function(){
    linkedList.addToTail(5);
    expect(linkedList.contains(5)).toEqual(true);
  });
  it("should return tail value when adding one item", function(){
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toEqual(5);
  });
  it("Should return first head value if we add two items", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    expect(linkedList.head.value).toEqual(5);
  });
  it("All link objects should be connected by next", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(15);
    expect(linkedList[0].next).toEqual(1);
    expect(linkedList[1].next).toEqual(2);
    expect(linkedList[2].next).toEqual(null);
  });
  it("Should return head value if we remove head", function(){
    linkedList.addToTail(5);
    expect(linkedList.removeHead()).toEqual(5);
  });
  it("Should update head value if we remove head", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(15);
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual(10);
  });
  // add more tests here to test the functionality of linkedList
});