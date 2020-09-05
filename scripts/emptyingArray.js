var arrayList1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Method 1
arrayList1 = [];
console.log('Method 1', arrayList1);

// Method 2
var arrayList2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
arrayList2.length = 0;
console.log('Method 2', arrayList2);

// Method 2 By reference
var arrayList3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var anotherArrayList = arrayList3;
anotherArrayList.length = 0;
console.log('Method 2 original array', arrayList3);
console.log('Method 2 reference array', anotherArrayList);

// Method 3
var arrayList4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
arrayList4.splice(0, arrayList4.length);
console.log('Method 3', arrayList4);

// Method 3 By reference
var arrayList5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var anotherArrayList1 = arrayList5;
anotherArrayList1.splice(0, arrayList5.length);
console.log('Method 3 original array', arrayList5);
console.log('Method 3 reference array', anotherArrayList1);

// Method 4 by using pop
var arrayList6 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log('Method 4 Original Array', arrayList6);
while (arrayList6.length) {
    arrayList6.pop();
}
console.log('Method 4 emptied array', arrayList6);