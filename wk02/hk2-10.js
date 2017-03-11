/*let greet = function(fn){
    fn();
};
let person ={
    name: 'Chi-Shan Yu',
    hello: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello: function(){
        greet(this.hello.bind(this));
    }
};
person.sayHello();*/

let greet = function(fn){
    fn();
};
let newPerson={
    name: 'Chi-Shan Yu',
    sayHello: function(){
        greet(
            ()=>console.log(`Hello ${this.name}`)
        );
    }
};

newPerson.sayHello();