var makeQueue = function(){
  var instance = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    size++;
  };

  instance.dequeue = function(){
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
