/**
 * Give a list of students, filter out non-female 
 */
 
var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
// your code here!
let newArr = [];
for (let ele of members) {
    if (ele.gender === 'female') {
        continue;
    }
    
    console.log(ele.name, ele.gender);
}
}

filterOutFemales(members);

