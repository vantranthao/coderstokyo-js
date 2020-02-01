var arr1 = [1,2,3,4,5];
var arr2 = ['a','b','c'];
arr1.pop();
console.log(arr1)

arr2.push('hanh cho');
console.log(arr2);

console.log(arr1[arr1.length-1]);

var angel = ['van', 'hanh', 'duyen', 'hang'];
angel.forEach((value, index) => {
    console.log(index, value)
});
console.log('===========');

arr1.push('hello Van');
console.log(arr1);
// splice // cut
let copyArray = arr1.slice();
console.log(copyArray)

// let myPig = {
//     name : 'Hanh',
//     age : 19,
//     school : 'tlu'
// }



// var menu = {
//     banh : 1,
//     thit : 2,
//     tuong : 3,
//     rau : 4
// }
// Object.keys(menu).forEach((item, index) =>  {
//     console.log(`${index} : ${item}`);
// })