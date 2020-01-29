var myPig = {
    name : 'Hanh',
    age : 19,
    sound : function() {
        console.log('keu cung ', this.name, 'meowmeowww');
    },
    eat : function(fish) {
        this.weight = this.weight + fish.weight;
        return this;
    }
}

// console.log(myPig.sound);
var fish = {
    weight : 46
};
console.log(`Before eating fish : ${myPig.weight}`);

myPig.eat(fish);
console.log(`After eating fish : ${myPig.weight}`);


