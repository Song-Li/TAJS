var cp = require("child_process");
function def(input) {
  var inner = input + "dd";
  var test;
  test = inner + input + "abc";
  return cp.exec(test);
}


var func_input = new Object();
module.exports = {def};
def(func_input);
