function withoutUseStrict(y) {
    x = y + 10;
}

console.log("Without use strict ", withoutUseStrict(10)); // Outputs 'Without use script undefined'

function withUseStrictValid(y) {
    "use strict";
    var p = y + 10;
    return p;
}

console.log("With use strict valid", withUseStrictValid(10)); // Outputs 'With use script valid: 10'

(function() {
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

function withUseScript(y) {
    'use strict';
    n = y + 10;
}

console.log("With use script ", withUseScript(10)); // error: Uncaught ReferenceError: n is not defined




