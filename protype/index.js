var mouse = {
    weight : 0.2,
    getWeight : function() {
        return this.weight;
    }
}

// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

Mouse.prototype.sleep = function() {
    console.log('Zzzzz...');
};
var jerry = new Mouse('white', 20);
jerry.sleep();

Mouse.prototype.meo = function() {
    console.log('Meow meow');
}

var hanhMeo = new Mouse('black', 70);
hanhMeo.meo();

