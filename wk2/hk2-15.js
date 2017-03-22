let promise=new Promise((resolve,reject)=>{
    reject();
});
promise
    .then(()=>console.log('work is finished!'))
    .then(()=>console.log('Again finished!'))
    .catch(()=>console.log('uh oh!'));