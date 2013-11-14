var makeQueue = function(){
  var instance = {};
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    storage[size] = value;
  };

  instance.dequeue = function(){
    var result = storage[1];
    size && size--;

    for (var i = 1; i <= size; i++) {
      storage[i] = storage[i + 1];
    }
    return result;
};

  instance.size = function(){
    return size;
  };

  return instance;
};