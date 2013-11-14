var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;

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
