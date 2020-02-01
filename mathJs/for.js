var myPig = [
    { name : 'Hanh', age: 19 },
    { name : 'Van', age: 18 },
    { love : 'Love', age : 0.5 }
]
// duyet array

for (let line of myPig) {
    console.log(line.name);
}

for (let key in myPig) { // pos
    console.log(key); // return position
    console.log(myPig[key]);
    console.log(myPig[key].name), '\n';
}
