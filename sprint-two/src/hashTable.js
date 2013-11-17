var HashTable = function(){
  this._limit = 3;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

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
  var insertValues = [k,v];
  var bucket = this._storage.get(i) || [];
  for(var j = 0; j < bucket.length; j++){
    var pair = bucket[j];
    if(k === pair[0]){
      pair[1] = v;
      return;
    }
  }
  bucket.push(insertValues);
  this._size++;
  this._storage.set(i, bucket);

  if (this._size > (this._limit * 0.75)) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = 0; n < bucket.length; n++){
    var bucketItem = bucket[n];
    if (bucketItem[0] === k){
      return bucketItem[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var n = 0; n < bucket.length; n++) {
    var bucketItem = bucket[n];
    if (bucketItem[0] === k) {
      bucket.splice(bucketItem, 1);
      this._size--;
      break;
    }
  }
  // if (this._size < (this._limit * 0.25)){
  //   this.resize(0.5);
  // }
};

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._limit = this._limit * newLimit;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

  var that = this;
  oldStorage.each(function(value) {
    if (value) {
      for (var i = 0; i < value.length; i++ ) {
        that.insert(value[i][0], value[i][1]);
      }
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
