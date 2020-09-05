function counter() {
    var counter = 0;
    return {
        add: function (increment) {
            counter += increment;
        },
        retrieve: function () {
            return `Counter is at ${counter}`
        }
    }
}

var c = counter();
c.add(5);
c.add(9);

console.log('your log', c.retrieve());