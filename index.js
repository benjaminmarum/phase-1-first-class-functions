function receivesAFunction (cb) {
    console.log(cb());
};

function returnsANamedFunction () {
    return function aNamedFunction (){
        console.log('Returno')
    }
};

function returnsAnAnonymousFunction () {
    return function () {console.log('Returno')}
};