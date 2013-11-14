var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0; // Hint: set an initial value here

  // Implement the methods below
};

Stack.prototype.push = function(value){
  this.storage[this.length++] = value;
};

Stack.prototype.pop = function(){
  this.length && this.length--;
  return this.storage[this.length];
};

Stack.prototype.size = function(){
  return this.length;
};

