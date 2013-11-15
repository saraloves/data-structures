var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  if(this._storage === undefined){
    this._storage = [value];
  } else {
    if(!this.contains(value)){
      this._storage.push(value);
    }
  }
};

setPrototype.contains = function(value){
  if(this._storage.indexOf(value) !== -1){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(value){
  if(this.contains(value)){
    this._storage.splice(this._storage.indexOf(value), 1);
  }
};
