var root = require("../../test_packages/growl");
var tainted = "";
TAJS_markTainted(tainted);
root(tainted, tainted, tainted);
