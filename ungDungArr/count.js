// tro vao de dem
function countOccurences(arr) {
    var count = {
        a: 0,
        b: 0,
        c: 0
    };
    for (var i in count) {    // object
        count[i] = couting(arr, i);
    }
    return count;
}   
// couting and add into
function couting (arr,x) {
    
}


var myObject = {
    name : 'Van',
    age : 18,
    school : 'tlu'
};
console.log(myObject)
for (var i in myObject) {
    console.log(myObject[i])
}