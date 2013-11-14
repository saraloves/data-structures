var makeQueue = function(){
  var instance = {};
  var storage = {};
  var size = 0;
  var enCounter = 0;
  var deCounter = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    enCounter++;
    storage[enCounter] = value;
  };

  instance.dequeue = function(){
    size && size--;
    deCounter++;
    return storage[deCounter];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
