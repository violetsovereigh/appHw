/*var person={
    firstname:'Claire',
    lastname: 'Li',
    greet0:function(){
        (()=>{
        console.log(this);
    })();
    }
    
}
person.greet0();*/
var person={
    firstname:'Claire',
    lastname: 'Li',
    greet0:()=>{
        
        console.log(this)
    }
    
    
}
person.greet0();