var personobj={
    firstname:"Simon",
    fullname:"",
    age:37,
    married:true,
    hasOwnHair:null,
    children:[{
        firstname:"Claire"
    }, {
        firstname:"Way"
    }]
};

var personjson=JSON.stringify(personobj,null,1);
console.log(personobj);
console.log(personjson);