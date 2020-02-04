var tripple = function(num) {
    return num*3;
};

var multiply = function(arr) {
    var pushHere = [];
    for (let i = 0 ; i < arr.length; i++) {
        pushHere.push(tripple(i));
    }   
    return pushHere;
}

multiply([10,5,8]);

