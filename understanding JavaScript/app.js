function greet(whattosay){

    return function(name){
        log(whattosay + ' ' + name);
    }
    
}

var sayHi = greet('Hi')
sayHi('xzm')
