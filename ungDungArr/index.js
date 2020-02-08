// var occurence = function (array) {
// var result = {};

// if (array instanceof Array) {
//     array.forEach(function (v,i) {
//         if (!result[v]) {
//             result[v] = [i];
//         } else {
//             result[v].push(i);
//         }
//     });
// };
// return result;
// }

// var arr = [1,1,1,1,2,5,6,4,43,4,54,6,8, 'tea', 'hanh', 'hanh']
// occurence(arr);


// Count the occurrences of each element inside an array using reduce
function counting(arr, x) {
    var result = arr.reduce(function (u, t) {
        if (t === x)
            return u + 1;
        else
            return u;
    }, 0)
    return result;
};
function countOccurrences(arr) {
    let count = {};
    for (var j = 0; j < arr.length; j++) { // array
        count.push(arr[j]);
    }
    for (var i in count) {
        count[i] = counting(arr, i);
    };
    return count;
}
//counting(['a', 'b', 'c', 'b', 'a'],'a');
countOccurrences(['a', 'b', 'c', 'b', 'a']);
  // {
  //   a: 2, 
  //   b: 2, 
  //   c: 1 
  // }