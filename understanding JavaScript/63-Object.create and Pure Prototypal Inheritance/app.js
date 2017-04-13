var person = {
    fname: 'Default',
    lname: 'Default',
    greet: function(){
        return 'Hi '+ this.fname;
    }
}

var john = Object.create(person);

log(john);

