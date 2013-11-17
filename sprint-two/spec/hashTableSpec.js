describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should insert value when using insert", function(){
    hashTable.insert("person", "lindsey");
    expect(hashTable.retrieve("person")).toEqual("lindsey");
  });

  it("should remove value when using remove", function(){
    hashTable.insert("person", "lindsey");
    hashTable.remove("person");
    expect(hashTable.retrieve("person")).toEqual(undefined);
  });

  it("should automatically resize when size becomes bigger than limit", function(){
    hashTable.insert("person", "lindsey");
    hashTable.insert("cat", "Meowmers");
    hashTable.insert("dog", "Mr. Barky");
    hashTable.insert("bird", "Tweetface");
    expect(hashTable._limit).toEqual(6);
  });
  it("should automatically resize when size becomes smaller than limit", function(){
    hashTable.insert("person", "lindsey");
    hashTable.insert("cat", "Meowmers");
    hashTable.insert("dog", "Mr. Barky");
    hashTable.insert("bird", "Tweetface");
    hashTable.remove("cat");
    hashTable.remove("bird");
    expect(hashTable._limit).toEqual(3);
  });

  // add more tests!
});
