
var Obj = function() {
   this.notice = 1;
};

var obj1 = new Obj;
var obj2 = new Obj;

obj1.notice = 2;

obj1.notice;
obj2.notice;

