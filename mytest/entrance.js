var root = require("tobetested");
var func_input = new Object();
var func_input2 = new Object();
var func_input3 = new Object();
var func_input4 = new Object();
TAJS_markTainted(func_input)
TAJS_markTainted(func_input2)
TAJS_markTainted(func_input3)
TAJS_markTainted(func_input4)

for (var key in root){
  if (typeof root[key] == 'function')
    root[key](func_input, func_input2, func_input3, func_input4);
}
