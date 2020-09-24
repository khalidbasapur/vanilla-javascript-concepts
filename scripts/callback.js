// A callback function is a function that is passed to another function as an argument and is executed after 
// some operation has been completed. 
// Below is an example of a simple callback function that logs to the console after some operations have been completed.

var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function callBackDemo(arr, callback) {
    arr.push('i');
    callback();
}


callBackDemo(array, function () {
    console.log("Callback invocation", array);
});
