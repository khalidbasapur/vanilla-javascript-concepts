function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

function multiply(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}

console.log('Add', add(2)(3)(4));

console.log('Multiply', multiply(2)(3)(4));