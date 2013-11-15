// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var size = 0;

  list.addToTail = function(value){
    var node = makeNode(value);
    list[size] = node;
    list.tail = node;
    if (!list.head) {
      list.head = node;
    } else {
      list[size - 1].next = size;
    }
    size++;
  };

  list.removeHead = function(){
    return list.head.value;
  };

  list.contains = function(value){
    for (var key in list) {
      if(list[key].value === value){
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};