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
    size && size--;
    return storage[1];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
