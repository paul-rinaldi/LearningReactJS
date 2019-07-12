// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// Functions can create objects
let f = function() {
  this.a = 1;
  this.b = 2;
};

// make an object
let o = new f();
// Object o has two properties currently now

// "adds properties in f function's prototype" - what does this mean?
// it means that
f.prototype.b = 3;
f.prototype.c = 4;
