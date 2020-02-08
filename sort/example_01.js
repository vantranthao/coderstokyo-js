var arr = [1, 5, 6, 2, 4, 9];
var result = arr.sort(function(a,b) {
    return b - a; // giam dan
    // return a - b; // tang dan
});
console.log(result);

console.log('\n');

var employees = [
    {name : 'Van', age : 18},
    {name : 'Hanh', age : 20},
    {name : 'Mot', age : 11}
]
var sortEmployees = employees.sort(function(a,b) {
    return a.age - b.age;
});

console.log(sortEmployees);

console.log('\n');

