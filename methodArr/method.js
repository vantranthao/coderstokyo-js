// // filter
// var arr = [0,1,2,3,4,5,6,7,8,9];

// var filtered = arr.filter(function(value, index) {
//     return value > 5;
// })

// console.log(filtered);


// callback function B16
var coffeeMachine = {
    makeCoffee : function(onFinish) { // hoan thanh cong viec => Tit tit
        console.log('Making coffee....');
        onFinish();
    }
};

var sound = function() {
    console.log('Tit tit');
}
coffeeMachine.makeCoffee(sound);

