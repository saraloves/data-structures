// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
    } else {
      list.tail.next = node;
      node.previous = list.tail;
    }
    list.tail = node;
  };

  //addToHead()
  list.addToHead = function(value){
  //make a node
  //check to see if there is a head
  //current head .previous is set to new node
  //new node .next set to current head
  //new node becomes the head
  var node = makeNode(value);
  if (list.head) {
    list.head.previous = node;
    node.next = list.head;
  } else {
    list.tail = node;
  }
    list.head = node;
  };

  list.removeHead = function(){
    //list head list tail == same node
    //list.head = list.head.next(Null)
    //list.head.previous (null !=== .previous)
    var result = list.head.value;
    if(list.head.value === list.tail.value){
      list.head = null;
      list.tail = null;
    } else{
      list.head = list.head.next;
      list.head.previous = null;
    }
    return result;
  };

  //removeTail()
  //save tail value as a var
  //check to see if only one node
  //tail.previous .next null
  //tail.previous new tail
  //return tail value var
  list.removeTail = function(){
    var result = list.tail.value;
    if (list.tail.value === list.head.value) {
      list.head = null;
      list.tail = null;
    } else {
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
    }
    return result;
  };
  list.contains = function(value){
    //while next !null
    //current node value against value
    //return true if found
    //return false
    console.log(value);
    var node = list.head;
    while(node){
      if(node.value === value){
        console.log("return true for " + value);
        return true;
      } 
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};