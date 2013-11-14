var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it
  var instance = {};
  instance.storage = {};
  instance.length = 0;

  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
  // Implement the methods below
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.length++;
    this.storage[this.length] = value;
  },
  dequeue: function(){
    var result = this.storage[1];
    this.length && this.length--;
    for (var i = 1; i <= this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return result;
},
  size: function(){
    return this.length;
  }
};
