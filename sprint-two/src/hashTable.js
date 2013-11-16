var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  //
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  var currentArray = [k,v];
  if (this._storage.get(i) !== undefined) {
    //
    var oldArray = this._storage.get(i);
    oldArray.push(currentArray);
    this._storage.set(i, oldArray);
  } else {
    this._storage.set(i, [currentArray]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = 0; n < bucket.length; n++){
    if (bucket[n][0] === k){
      return bucket[n][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = 0; n < bucket.length; n++) {
    if (bucket[n][0] === k) {
      bucket.splice(bucket[n], 1);
      break;
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
