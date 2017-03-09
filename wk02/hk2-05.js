
/*let state={a:1,b:2,c:3};
console.log(state);
state={...state, d:4};
console.log(state);
state={...state, a:10};
console.log(state);
*/
function adder(base, ...numbers){
   numbers.forEach(function(number){
    console.log(base+number);
   });     
}
adder(3,5,7,1);