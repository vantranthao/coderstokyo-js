var arr = [8, 8, 6.75];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];    
    var num = i+1;
}
console.log(sum);

console.log(`num : ${num}`);

let result = Math.round(sum/num);
console.log(result);
