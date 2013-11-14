var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.length = 0;

  // Implement the methods below
};

Queue.prototype.enqueue = function(value){
  this.length++;
  this.storage[this.length] = value;
};
Queue.prototype.dequeue = function(){
  var result = this.storage[1];
  this.length && this.length--;
  for (var i = 1; i <= this.length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return result;
};
Queue.prototype.size = function(){
  return this.length;
};

