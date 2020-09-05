function isInt(val) {
    return val % 1 === 0;
}

console.log("Check if 4 is int", isInt(4)); // true
console.log("Check if 12.2 is int", isInt(12.2)); // false
console.log("Check if 0.3 int", isInt(0.3)); // false
console.log("Check if 0 int", isInt(0)); // true
console.log("Check if -1 int", isInt(-1)); // true
console.log("Check if -1.1 int", isInt(-1.1)); // false