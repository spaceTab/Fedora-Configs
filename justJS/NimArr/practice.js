//Arrays in JS - June, 6, 2018
//nimits crazy ass repo - WITH NO FUCKING COMMENTS </3


//different types of arrays
var arr = [1,2,3,4, "Asd"];

var arr2 = new Array(1,2, "As");

var arr3 = [1,2,3,4,5,6,7,8,9];

var arr4 = [1,'a', true, {a:10}, [3,4]];

var obj1 = {a:10, b:11, c:12};

//outputting each array
console.log(arr);
console.log(arr2);

console.log([1,2]!=[1,2]);

console.log(arr3.slice(-5, -2));

console.log('-------------for-in loop');
for (var i in obj1){
    console.log(i + ":" + obj1[i]);
}

console.log('-------------for-in loop')
for(var i in arr2){
    if(arr2[i]+1 >= 1)
        console.log(arr2[i]-1);
}

//my myArrays

var mArr1 = ['h','e','l','l','o'];

console.log('like a c string');
for(var i in mArr1){
    console.log(mArr1[i]);
}
console.log('outputting length of string')
for(var i in mArr1){
    if(mArr1[i].length){
        console.log(i+1);
    }
}

var mArr2 = ['1','2','3','4','5'];

console.log('for-of-loop');
for(var i of mArr2){
    console.log(mArr2[i]);
}

console.log('for-in-loop'); //in loops do not index at zero?
for(var i in mArr2){
    console.log(mArr2[i]);
}

let mArr1 = ['1','2'];

for (var i in mArr1){
    console.log(i);
}