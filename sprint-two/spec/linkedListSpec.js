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
    linkedList.addToTail(10);
    linkedList.addToTail(15);
    expect(linkedList.contains(5)).toEqual(true);
    expect(linkedList.contains(10)).toEqual(true);
    expect(linkedList.contains(15)).toEqual(true);
    expect(linkedList.contains(20)).toEqual(false);
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
    expect(linkedList.head.next.value).toEqual(10);
    expect(linkedList.head.next.next.value).toEqual(15);
    expect(linkedList.head.next.next.next).toEqual(null);
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
  //Doubly linked lists
  it("should point to previous node if there is more than one node", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    expect(linkedList.tail.previous.value).toEqual(5);
  });

  it("should point to new head when we add to head", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToHead(15);
    expect(linkedList.head.value).toEqual(15);
    expect(linkedList.head.next.value).toEqual(5);
  });
  it("should point to new tail when we removeTail", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(15);
    expect(linkedList.removeTail()).toEqual(15);
    expect(linkedList.tail.value).toEqual(10);
  });
  // add more tests here to test the functionality of linkedList
});