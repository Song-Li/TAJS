var cp = require("child_process");
var os = require("os");
function my_exec(exec_input) {
  var exec_res = exec_input + 123;
  return exec_res;
}
function def(input) {
  var inner = input + new Object();
  var test;
  test = inner + input + "abc";
  var time = os.freemem(test);
  var res = cp.exec(test);
  return res;
}


//var func_input = new Object();
//TAJS_markTainted(func_input);
//def(func_input);

module.exports = {
  def, 
  my_exec
}
