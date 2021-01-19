// TASK 1
// Repack old array to the new one, in the same order
var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
    dataNew[i] = dataOld[i]
}

console.log('Repack old array to the new one, in the same order');
console.log('This is old array ' + dataOld);
console.log('This is new array ' + dataNew);

// TASK 2
// Repack old array to the new one, in the reverse order
var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = 0; i < dataOld.length; i++) {
    dataNew[i] = dataOld[dataOld.length - 1];
    dataNew[i] = dataOld[dataOld.length - dataNew.length];
}

console.log('Repack old array to the new one, in the reverse order');
console.log('This is old array ' + dataOld);
console.log('This is new array ' + dataNew);


// TASK 3
// Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one.
var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

for (var i = 0; i < dataOld.length; i++) {
    dataNew[dataNew.length] = dataOld[i];
}

console.log('Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one');
console.log('This is new array ' + dataNew);


// TASK 4
// Create a new array that contains data from both arrays, starting with data from array a.
var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var newArray = [];

for (var i = 0; i < a.length; i++) {
    newArray[i] = a[i];
    if (b[i]) {
        newArray[i + a.length] = b[i];
    }
}

console.log('Create a new array that contains data from both arrays, starting with data from array a.');
console.log('This is new array ' + newArray);

// TASK 5
// Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on.
var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var alternateArray = mergeAlternateArray(a, b);

function mergeAlternateArray(arrayA, arrayB) {
    var newAlternateArray = [];
    for (var i = 0; i < arrayA.length; i++) {
        newAlternateArray.push(arrayA[i]);
        if (arrayB[i]) {
            newAlternateArray.push(arrayB[i]);
        }
    }
    return newAlternateArray;
}

console.log('Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on');
console.log('This is new array ' + alternateArray);

// TASK 6
// Console log next pattern (you're allowed to use only single *)
// *
// **
// ***
// ****
// *****
// ******

console.log('Console log next pattern (youa re allowed to use only single *)');

var str = '';
for (var i = 1; i < 7; i++) {
        str += '*';
        console.log(str);
}

// TASK 7
// Console log next pattern (you're allowed to use only single *)
// **********
// *        *
// *        *
// *        *
// *        *
// **********

var width = 10;
var height = 6;
var edge = '*';
var inside = ' ';

console.log('Console log next pattern (you are allowed to use only single * or empty space)');
for (var i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        console.log(edge.repeat(width));
    } else {
        console.log(edge + inside.repeat(width - 2) + edge);
    }
}
