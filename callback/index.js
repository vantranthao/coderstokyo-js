var coffeeMachine = {
    makeCofee : function(onFinish) {
        console.log('Making coffee...');
        onFinish();
    }
}

var beep = function() {
    console.log('Tit...tit');
}

coffeeMachine.makeCofee(beep);
