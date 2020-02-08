var product = [
    { name: 'chocolate', price: 5000, stock: 3 },
    { name: 'mirror', price: 2000, stock: 5 },
    { name: 'candy', price: 10000, stock: 3 }
];

// tang dan

var sortPrice = product.sort(function (a, b) {
    return a.price - b.price;
});
console.log(...sortPrice);
console.log('\n');

// add sumStock into product

for (let ele of product) {
    ele.sumStock = ele.price * ele.stock;
};
console.log(...product);

// sort tang dan
var finalResult = product.sort(function(a, b) {
    return a.sumStock - b.sumStock;
})
console.log(...finalResult);


